$(document).on('ready', function(){

    $('[data-select-all]').on('click', function(){
        $('select[name*="' + $(this).attr('data-select-all') + '"] option:not(:selected)').attr('selected', 'selected');
        AJS.$('select[name*="' + $(this).attr('data-select-all') + '"]').auiSelect2();
        return false;
    });

    $('[data-select-none]').on('click', function(){
        $('select[name*="' + $(this).attr('data-select-none') + '"] option:selected').removeAttr('selected');
        AJS.$('select[name*="' + $(this).attr('data-select-none') + '"]').auiSelect2();
        return false;
    });

    $('[data-check-all]').on('click', function(){
        $('input[type=checkbox][name*="' + $(this).attr('data-check-all') + '"]:not(:checked)').attr('checked', 'checked');
        return false;
    });

    $('[data-check-none]').on('click', function(){
        $('input[type=checkbox][name*="' + $(this).attr('data-check-none') + '"]:checked').removeAttr('checked');
        return false;
    });

    $('#store-channel').on('submit', function(event){
        event.preventDefault();

        var form = $(this);

        $('#preload').fadeIn();
        form.find('[data-aui-notification-error]').removeAttr('data-aui-notification-error');
        form.find('.form-error-msg').text('');

        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form.serialize(),
            success: function(data) {
                if (data.status == 'success') {
                    window.location.href = data.redirect_url;
                } else {
                    var errors = '';
                    $.each(data.errors, function(name, error){
                        form.find('.form-error-msg').text(error);
                        form.find('[name="' + name + '"]').attr('data-aui-notification-error', '');
                    });
                    $('#preload').fadeOut();

                    var error_tab = form.find('[data-aui-notification-error]:first').parents('.tabs-pane').attr('id');
                    form.find('[role=tab][href=#' + error_tab + ']').trigger('click');
                }
            }
        });

        return false;
    });

    AJS.$("[data-dialog]").click(function() {
        AJS.dialog2("#" + $(this).data('dialog')).show();
    });

    AJS.$(".dialog-close-button").click(function(e) {
        e.preventDefault();
        AJS.dialog2("#" + $(this).parents('[role=dialog]').attr('id')).hide();
    });
});