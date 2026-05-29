$(function () {
    if (!localStorage.openin) localStorage.openin = 'window';
    if (!localStorage.deleteconfirm) localStorage.deleteconfirm = 'yes';
    if (!localStorage.encryption) localStorage.encryption = 'no';

    $('input[name="openin"][value="'+localStorage.openin+'"]').prop('checked', true);
    $('input[name="deleteconfirm"][value="'+localStorage.deleteconfirm+'"]').prop('checked', true);
    $('input[name="encryption"][value="'+localStorage.encryption+'"]').prop('checked', true);
    
    $('input[type="radio"]').change(function (e) {
        localStorage[$(this).attr('name')] = $(this).val();
    });
});