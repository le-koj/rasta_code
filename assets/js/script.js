var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e){
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
})

clipboard.on('error', function(e){
    console.error('Action', e.action);
    console.error('Trigger', e.trigger);
})


/* set button variable */
var btn_elements = '<button class="btn code-btn" data-clipboard-target="#gui-app6"><img class="clippy" src="/assets/clippy.svg" alt="copy to clipboard"></button>';

/* for each items in elements, get id attribute, add id attribute to button target, append button to element */
$("div.code-container").each(function(){
    var el_id = $(this).attr("id");
    var cur_btn = $(btn_elements).attr("data-clipboard-target", "#"+el_id);
    $(this).append(cur_btn);
});

