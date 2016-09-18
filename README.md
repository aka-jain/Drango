# Stash
Easy to use Django admin interface.

Stash is a customize theme for Grappelli (Material Design). It has a beautiful UI with good user experience. 

#Features
1. Awesome and minimal UI
2. Fully Responsive
3. Ajax implementations
4. Charts for apps representations
5. Icon rich UI
6. Filters for Site Admnistration Page

#SetUp
For now you have to download the stash into your django project.
Then paster stash into your installed app in setting.py.
Change URL Patterns for Stash admin as 
  url(r'^stash/', include('grappelli.urls')), # stash URLS
  url(r'^admin/', include(admin.site.urls)),

And login to localhost:8000/admin/

#Dashboard snapshot
<img src="images/Stash/images/Screen Shot 1938-06-27 at 12.59.50 PM.png">

#Credits
https://github.com/sehmaschine/django-grappelli

