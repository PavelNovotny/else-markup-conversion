# Konverze dotazů pomocí templatovacího jazyka, (Mustache). 

## Data pro šablony
```
{
  "general":{
    "gui":"4-3-1",
    "login_external":"x0503526",
    "login_internal":"ra123456",
    "page":"1",
    "size":"10",
    "searchStrings": [],
    "show_inactive":true
  },
  "advanced":{
    "product":{
      "class":["something"],
      "address":["something"],
      "crossId":["something"],
      "name":["something"],
      "productCode":["something"],
      "status":["active"],
      "status":["inactive"],
      "status":["suspend"],
      "hasSupplementalName":["something"],
      "hasNotSupplementalName":["something"],
      "hasActive":["something"],
      "hasInactive":["something"],
      "parameterName":["something"],
      "parameterValue":["something"]
    }
  }
}
```

## Jednoduchý filtr
```
  "general":{
    "gui":"4-3-1",
    "login_external":"x0503526",
    "login_internal":"ra123456",
    "page":"1",
    "size":"10",
    "searchStrings": [],
    "show_inactive":true
  }
```
### gui
Pro účely trackování verze gui, připravené businessem jako podklad.
http://o2themalx01.azuredev2.cz.o2/build/o2-static/4-3-1-vysledky-vyhledavani.hbs.html

### login\_external, login\_internal
V případě, že je login\_external vyplněný, tak vložit do template sekci pro kontrolu loginu (permission), jinak pustit bez oprávnění - nekontrolovat.

### (page) from, size
Pro účely stránkování. Buď přepočítat na from z page, nebo se to změní na from a bude bez přepočtu.

### searchStrings
Pole hledaných stringů.

### show\_inactive
V některých modelech je atribut `status`, který nabývá hodnot `active`, `inactive` a `suspend`.

## Advanced filtr
TODO dopsat.






