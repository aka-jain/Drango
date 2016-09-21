# Drango
Easy to use Django admin interface.

Drango is a customize theme for Grappelli (Material Design). It has a beautiful UI dark theme with good user experience that makes the data upload work enjoyable.

#Features(Upcoming)
1. Awesome and minimal UI
2. Fully Responsive
3. Ajax implementations
4. Charts for apps representations
5. Icon rich UI
6. Filters for Site Admnistration Page

#SetUp
For now you have to download the this Grappelli directory into your Django project.
Then paste "Grappelli" into your installed app in setting.py (same as we do for Grappelli https://github.com/sehmaschine/django-grappelli )<br>
Change URL Patterns for your admin same as we do for Grappelli<br>
  url(r'^grappelli/', include('grappelli.urls')), <br>
  url(r'^admin/', include(admin.site.urls)),

And login to localhost:8000/admin/ :^)

#Login Design
<img src="https://github.com/aka-jain/Drango/blob/master/images/Login.png?raw=true">

#Site Admin Design
<img src="https://github.com/aka-jain/Drango/blob/master/images/Site_Admin.png?raw=true">

#List View Design
<img src="https://github.com/aka-jain/Drango/blob/master/images/List_View.png?raw=true">

#Credits
https://github.com/sehmaschine/django-grappelli

#Note
This project is under development. And for now it is based on Grappelli.Soon it will be released as an independent plugin. Till then have a happy uploading work :^D

