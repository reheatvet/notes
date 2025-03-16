---
title: 
draft: false
tags:
  - mugshot
permalink: https://notesfromthedao.com/GettingStarted
---
☕ Are you using [@mugshot_vet](https://x.com/mugshot_vet) and an ad blocking solution like **Adguardhome or PI-hole?** You might need to exclude https://fpnpmcdn.net from any block rules in order to submit your daily brew like I had to!

Without this rule applied the submission would hang on a never stopping loading screen when the *barista AI* is analyzing your brew. 

Mugshot's CDN (content delivery network) seems to be the one that's blocked, not Mugshot themselves.

# Configuration
> [!NOTE] Not using Adguard home?
 >For other ad blocking solutions like **PI-Hole, Ublock Origin, AdBlock plus, Brave etc.,** look up their respective documentation.

In **Adguardhome**, the specific custom filter rule can be created here: 
**Filters -> custom filtering rules**

The specific code to enter is:
``@@||fpnpmcdn.net^`` 

> [!info] This code unblocks access to the site and all its subdomains

![[Pasted image 20250315204527.png]]


