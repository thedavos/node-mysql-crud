$(() => {

    
    function tableContentTemplate(name, address, phone) {
        const number = $('#tableContent').children().length + 1
        return `<tr>
                    <td>${number}</td>
                    <td>${name}</td>
                    <td>${address}</td>
                    <td>${phone}</td>
                    <td>
                        <a class="btn btn-dark btn-sm btn-block" href="/update/${null}">Update</a>
                        <a class="btn btn-danger btn-sm btn-block" href="/delete/${null}">Delete</a>
                    </td>
                </tr>`
    }
    
    function ajaxPostRequest(url, postedData, success, error) {
        $.ajax({
            type: 'POST',
            url: url,
            data: postedData,
            dataType: 'text',
            success,
            error
        });
    }

    $('#form').submit(function (e) { 
        e.preventDefault();

        const form = $(this)
        const formData = form.serialize()
        const name = $('#name').val()
        const address = $('#address').val()
        const phone = $('#phone').val()
        const template = tableContentTemplate(name, address, phone)

        ajaxPostRequest("/add", formData, (response, status) => { 
            $('#tableContent').append(template)
            console.log('STATUS', status)
        }, err => {
            console.log('ERROR', err)
        })

    });
})