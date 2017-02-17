function main() {
  //Creates a report with differen Information like Campaign, Adgroup, Domain,... for a specific timeframe
  //Instead of YESTERDAY you can also use TODAY, LAST_7_DAYS, LAST_14_DAYS or LAST_30_DAYS
  var report = AdWordsApp.report("SELECT Domain, CampaignName, AdGroupName, Impressions, Clicks, Conversions, ViewThroughConversions, CrossDeviceConversions " +
                                 "FROM AUTOMATIC_PLACEMENTS_PERFORMANCE_REPORT " +
                                 "DURING LAST_7_DAYS");
  
  //Put here the URL of your Spreadsheet Copy
  var SPREADSHEET_URL = "PLACE YOUR SPREADSHEET URL HERE";

  //If you rename the sheets in the template Spreadsheet - rename them here as well
  var SHEET_NAME = "Placement_URL";
  var MATCH_SHEET = "Matchwords"; 
  var ss = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
  var sheet = ss.getSheetByName(SHEET_NAME);
  var match = ss.getSheetByName(MATCH_SHEET);
  var rows = report.rows();
  var lastRow = match.getLastRow();
  var matchword = match.getRange(1, 1, lastRow).getValues();
  

  while (rows.hasNext()) {
    
    var row = rows.next();
    var placement = row['Domain'];
    var campaign = row['CampaignName'];
    var adgroup = row['AdGroupName'];
    var impressions = row['Impressions'];
    var clicks = row ['Clicks'];
    var conv = row['Conversions'];
    var conversions = parseInt(conv);
    var viewconv = row ['ViewThroughConversions'];
    var viewconversions = parseInt(viewconv);
    var deviceconv = row ['CrossDeviceConversions'];
    var deviceconversions = parseInt(deviceconv);
    var i = 0
    for (var i = 0, len = matchword.length; i < len; i++) {
      
      if (placement.indexOf(matchword[i][0]) != -1) {
           
            sheet.appendRow([campaign, adgroup, placement, matchword[i][0], impressions, clicks, (clicks/impressions), conversions, viewconversions, deviceconversions]);
        
      }
      
    }
  }
  
  // Puts the date of today in the Cell L1 of your sheet 
  sheet.getRange('L1').setValue(new Date())
}
