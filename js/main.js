$(document).ready(function() {
    $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
} );

// jQuery(document).ready(function () {
//     my_table = jQuery("#myTable").DataTable();
// })
