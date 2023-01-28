let copy = document.getElementsByClassName("buttons-copy");




// $(document).ready(function() {
//     $('#example').DataTable( {
//         dom: 'Bfrtip',
//         buttons: [
//             'copy', 'csv', 'excel', 'pdf', 'print'
//         ]
//     } );

//     copy.classList.add("btn-secondary");
// } );


$('#example').DataTable({
    paging: false,
    "info": false,
    searching: false,
    dom: 'Bfrtip',
    buttons: [
        { extend: 'copy', className: 'btn btn-secondary text' },
        { extend: 'csv', className: 'btn btn-primary glyphicon glyphicon-save-file' },
        { extend: 'excel', className: 'btn btn-primary glyphicon glyphicon-list-alt' },
        { extend: 'pdf', className: 'btn btn-primary glyphicon glyphicon-file' },
        { extend: 'print', className: 'btn btn-primary glyphicon glyphicon-print' }
    ]
    });


// jQuery(document).ready(function () {
//     my_table = jQuery("#myTable").DataTable();
// })
