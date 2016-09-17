/**
 * GRAPPELLI ACTIONS.JS
 * minor modifications compared with the original js
 *
 */

(function($) {
    var lastChecked;

    $.fn.actions = function(opts) {
        var options = $.extend({}, $.fn.actions.defaults, opts);
        var actionCheckboxes = $(this);
        var list_editable_changed = false;
        var checker = function(checked) {
            if (checked) {
                showQuestion();
                $(actionCheckboxes).prop("checked", true)
                    .parent().parent().addClass(options.selectedClass);
            } else {
                reset();
                $(actionCheckboxes).prop("checked", false)
                    .parent().parent().removeClass(options.selectedClass);
            }
        },
        updateCounter = function() {
            var sel = $(actionCheckboxes).filter(":checked").length;
            $(options.counterContainer).html(interpolate(
            ngettext('%(sel)s of %(cnt)s selected', '%(sel)s of %(cnt)s selected', sel), {
                sel: sel,
                cnt: _actions_icnt
            }, true));
            $(options.allToggle).prop("checked", function() {
                var value;
                if (sel == actionCheckboxes.length) {
                    value = true;
                    showQuestion();
                } else {
                    value = false;
                    clearAcross();
                }
                return value;
            });
        },
        showQuestion = function() {
            $(options.acrossClears).hide();
            $(options.acrossQuestions).show();
            $(options.allContainer).hide();
        },
        showClear = function() {
            $(options.acrossClears).show();
            $(options.acrossQuestions).hide();
            $(options.actionContainer).toggleClass(options.selectedClass);
            $(options.allContainer).show();
            $(options.counterContainer).hide();
            $(options.counterContainer).parent('li').hide();
        },
        reset = function() {
            $(options.acrossClears).hide();
            $(options.acrossQuestions).hide();
            $(options.allContainer).hide();
            $(options.counterContainer).show();
            $(options.counterContainer).parent('li').show();
        },
        clearAcross = function() {
            reset();
            $(options.acrossInput).val(0);
            $(options.actionContainer).removeClass(options.selectedClass);
        };
        // Show counter by default
        $(options.counterContainer).show();
        // Check state of checkboxes and reinit state if needed
        $(this).filter(":checked").each(function(i) {
            $(this).parent().parent().toggleClass(options.selectedClass);
            updateCounter();
            if ($(options.acrossInput).val() == 1) {
                showClear();
            }
        });
        $(options.allToggle).show().click(function() {
            checker($(this).prop("checked"));
            updateCounter();
        });
        $(options.acrossQuestions + " a").click(function(event) {
            event.preventDefault();
            $(options.acrossInput).val(1);
            showClear();
        });
        $(options.acrossClears + " a").click(function(event) {
            event.preventDefault();
            $(options.allToggle).prop("checked", false);
            clearAcross();
            checker(0);
            updateCounter();
        });
        lastChecked = null;
        $(actionCheckboxes).click(function(event) {
            if (!event) { event = window.event; }
            var target = event.target ? event.target : event.srcElement;
            if (lastChecked && $.data(lastChecked) != $.data(target) && event.shiftKey === true) {
                var inrange = false;
                $(lastChecked).prop("checked", target.checked)
                    .parent().parent().toggleClass(options.selectedClass, target.checked);
                $(actionCheckboxes).each(function() {
                    if ($.data(this) == $.data(lastChecked) || $.data(this) == $.data(target)) {
                        inrange = (inrange) ? false : true;
                    }
                    if (inrange) {
                        $(this).prop("checked", target.checked)
                            .parent().parent().toggleClass(options.selectedClass, target.checked);
                    }
                });
            }
            $(target).parent().parent().toggleClass(options.selectedClass, target.checked);
            lastChecked = target;
            updateCounter();
        });
        $('form#grp-changelist-form table#result_list tr').find('td:gt(0) :input').change(function() {
			list_editable_changed = true;
		});
		$('form#grp-changelist-form button[name="index"]').click(function(event) {
			if (list_editable_changed) {
				return confirm(gettext("You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost."));
			}
		});
		$('form#grp-changelist-form input[name="_save"]').click(function(event) {
			var action_changed = false;
			$('select option:selected', options.actionContainer).each(function() {
				if ($(this).val()) {
					action_changed = true;
				}
			});
			if (action_changed) {
				if (list_editable_changed) {
					return confirm(gettext("You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action."));
				} else {
					return confirm(gettext("You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button."));
				}
			}
		});

        // GRAPPELLI CUSTOM: submit on select
        // $(options.actionSelect).attr("autocomplete", "off").change(function(evt){
        //     $(this).parents("form").submit();
        // });
    };
    /* Setup plugin defaults */
    $.fn.actions.defaults = {
        actionContainer: "div.grp-changelist-actions",
        counterContainer: "li.grp-action-counter span.grp-action-counter",
        allContainer: "div.grp-changelist-actions li.grp-all",
        acrossInput: "div.grp-changelist-actions input.select-across",
        acrossQuestions: "div.grp-changelist-actions li.grp-question",
        acrossClears: "div.grp-changelist-actions li.grp-clear-selection",
        allToggle: "#action-toggle",
        selectedClass: "grp-selected",
        actionSelect: "div.grp-changelist-actions select"
    };
})(grp.jQuery);
