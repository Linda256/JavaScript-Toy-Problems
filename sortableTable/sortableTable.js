/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

// $(function () {
//   // TODO: your code here!

// });
$('.food').sortable({
  containment: 'parent',tolerance:'pointer',
  cursor:'pointer',revert:true,opacity: 0.6;
});

