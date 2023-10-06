---
"@twilio-paste/description-list": minor
"@twilio-paste/core": minor
---

[Description List] Adjust spacing on Description List component. Description List was previously inheriting 14px of top and bottom margin from the HTML element. This change removes that spacing, so the component now has 0px of top/bottom margin. The same amount of spacing remains between DescriptionListTerms and DescriptionListDetails. In order to maintain designs with Description Lists, you may have to replace the removed spacing to your layout.
