$(function () {

    // GET CATEGORIES SELECT OPTION
    var $selectCateg = $('#catyselect');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/category',
        success: function (getCategory) {
            $.each(getCategory, function (i, categoryRow) {
                $selectCateg.append(`<option value="${categoryRow._id}">${categoryRow.caty_name}</option>
                `)
            });
        },
    });

    // GET SOUS CATEGORIES TABLE
    var $question = $('#getquestion');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/Questions',
        success: function (question) {
            $.each(question, function (i, rowSC) {
                $question.append(`
                <tr>
                <td id="val">${rowSC.Cateogory}</td>
                <td id="val">${rowSC.main_question}</td>
                <td id="val">${rowSC.anser_quesion}</td>
                <td class="text-center py-0 align-middle">
                    <div class="btn-group btn-group-sm">
                    <a type="button" onclick="updateSousCategory('${rowSC._id}')" class="btn btn-primary">Edite</a>
                    <a type="button" onclick="deleteSousCategory('${rowSC._id}')" class="btn btn-danger text-white">Delete</a>
                    </div>
                </td></tr>
                `)
            });
        },
    });
})

// ADD NEW SOUS CATEGORIE        
$('#addQTSS').on('click', function (e) {
    var $category = $('#catyselect');
    var $MainQues = $('#MainQues');
    var $question1 = $('#q1c');
    var $question2 = $('#q1f');
    var $question3 = $('#q2f');
    var $question4 = $('#q3f');
        $.post({
            method: 'POST',
            url: 'http://localhost:3000/questions/add',
            data: {
                _id: $category.val(),
                main_question: $MainQues.val(),
                anser_quesion: $question1.val(),
                Question1: $question2.val(),
                Question2: $question3.val(),
                question3: $question4.val()
            },
            success: function () {

                location.reload();
            },
            timeout: 1000
        })
});

// DELETE SOUS CATEGORIE
function deleteSousCategory(_id) {
    if (confirm('Are you sure ?')) {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/souscategory/delete/' + _id,
        success: function () {
            location.reload();
        },
        timeout: 1000
    })
}}

// update category 
function updateSousCategory(_id) {
    var $nom = $('#sCateg_name');
    var $id = $('#selectCateg');
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:8080/souscategory/update/' + _id,
        data: {
            nom: $nom.val()
        },
        success: function (data) {

            location.reload();
        }
    })
}
