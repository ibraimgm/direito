#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Rafael Ibraim'
SITENAME = 'Resumos de Direito'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/Sao_Paulo'

DEFAULT_LANG = 'pt'

STATIC_PATHS = ['css', 'js', 'files']

# do not show pages on menu by default
# NOT HONORED - Need to put "status:hidden" in individual pages
DISPLAY_PAGES_ON_MENU = False

# override file
CSS_OVERRIDE = '/css/override.css'

# enable datatables
USE_DATATABLES = True

# Theme is https://github.com/alexandrevicenzi/Flex
THEME = './flex'

# title, etc.
SITETITLE = AUTHOR
SITESUBTITLE = 'Acadêmico do Curso de Direito'
#SITELOGO = 'Profile picture to show above author name (absolute url).'
#SITEDESCRIPTION = 'Site description to use in meta tags.'
OG_LOCALE = 'pt_BR'
COPYRIGHT_YEAR = 2015
#CC_LICENSE = 'Creative Commons License to show on footer.'

# menus
MAIN_MENU = True
MENUITEMS = (('Resumos', '/pages/resumos.html'),
             ('Modelos', '/pages/modelos.html'),
             ('Sobre', '/pages/sobre.html'))

# repeat the menu itens on the sidebar
LINKS = MENUITEMS

# social networks
SOCIAL = (('envelope-o','mailto:ibraim.gm@gmail.com'),
          ('github','https://github.com/ibraimgm'),
          ('adb-facebook','https://www.facebook.com/ibraim.gm'),
          ('adb-linkedin', 'http://br.linkedin.com/in/ibraimgm'))

# robots.txt
ROBOTS = 'index, follow'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# pagination size
DEFAULT_PAGINATION = 5

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
