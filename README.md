# GDN-URL-Matcher
This is a little Google AdWords Script that finds Placement URLs in your Google Display Campaigns which contains specific matchwords.
The output is written in a Google Spreadsheet.
With this report you can check if your Display Ads are delivered to relevant placements.

1. Make a copy of this Google Spreadsheet:

  https://docs.google.com/spreadsheets/d/1rY8ZtJu9Ww6G0-Tgxyg51LQyDnGEp3yyjdPnipcwGCE/
  
  - The output will be placed in sheet 'Placement_URL'
  - Put your matchwords in column A of sheet 'Matchwords'
 
2. Copy the script in your AdWords Account.
  Introductions on how to do that you can find here:
  https://developers.google.com/adwords/scripts/docs/your-first-script

3. Replace the content of the SPREADSHEET_URL field in line 9 with the URL of your Spreadsheet copy.
   You can setup different timeframes but it can be that Google Scripts will give you a timeout error if 
   you have too much data in your report.
   Working with a 14 Days timeframe worked fine for me.
   
4. Run the script or shedule it to a period you like - that's it!   
