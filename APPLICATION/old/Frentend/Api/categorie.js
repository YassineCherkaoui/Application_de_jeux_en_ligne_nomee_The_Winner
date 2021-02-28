$(function () {
    var $getCategory = $('#getCategory');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/category',
        success: function (getCategory) {
            $.each(getCategory, function (i, categoryRow) {
                $getCategory.append(`<tr>
        <td id="val"> ${categoryRow.caty_name}</td>
        <td class="text-center py-0 align-middle">
            <div class="btn-group btn-group-sm">
                <a type="button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"class="btn btn-primary" id="myBtn" onclick="updateCategory('${categoryRow._id}')">Edite</a>
                <a type="button" onclick="deleteCategory('${categoryRow._id}')" class="btn btn-danger text-white">Delete</a>
            </div>
        </td></tr>
    
        `)
            });
        }
    });

})

// add new category 
$('#add_categrie').on('click', function (e) {
    var $categoryName = $('#categorie_name');
    if ($categoryName.val() == "") {
        $categoryName.addClass('is-invalid');
        e.preventDefault();
    } else {
        $.post({
            method: 'POST',
            url: 'http://localhost:3000/category/add',
            data: {
                caty_name: $categoryName.val()
            },
            success: function () {
                location.reload();
            },
            timeout: 1000
        })
    }
});

// delete category
function deleteCategory(_id) {
    if (confirm('Are you sure ?')) {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:3000/category/delete/' + _id,
        success: function () {

            location.reload();
        },
        timeout: 1000
    })
} }

// update category 

function updateCategory(_id) {
    $('#btnedit').on('click', function (e) {
    var $editcaty_name = $('#newcategorie_name');
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:3000/category/update/' + _id,
        data: {
            caty_name: $editcaty_name.val()
        },
        success: function (data) {

            location.reload();
        }
    })
    })
}
