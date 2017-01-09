# Changelog

### Consider
- Remove page break option, but add avoidPageSplit instead

### 3.0
- Change case from autoTable to autotable
- Added option: tableId
- One parameter initialization `doc.autotable({head: ..., body: ...})`
- Added option to parse css styles with: `useCssStyles: true`
- Added jsPDF.API.autotableSetDefaults({}) for setting global settings
- Added doc.autotableSetDefaults({}) for setting document settings
- Removed `doc.autoTableHtmlToJson` in favor of the `settings.htmlElement`
- Hooks changed for improved usability
- Added possibility to add a table border

### 2.2
- Support for all units 
- Added option: `showHeader: 'everyPage'|'firstPage'|'never'`
- When using autoTableHtmlToJson the cell.raw property in hooks is now set to the html cell element
- Now splits row when to big to fit page.
- Fixed that cursor was not reset between new documents.
- Added support for vertical padding (use instead of the rowHeight style)
- Deprecated `doc.autoTableAddPage` in favour of `data.addPage()` in hooks
- Changed from elem.textContent to elem.innerText