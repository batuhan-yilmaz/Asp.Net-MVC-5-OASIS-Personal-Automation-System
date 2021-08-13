var ajaxCallUrl = 'Product/ProductList',
    page = 0,
    inCallback = false,
    isReachedScrollEnd = false;


var scrollHandler = function () {
    if (isReachedScrollEnd == false)
    {
        loadProducts(ajaxCallUrl);
    }
}
function loadProducts(ajaxCallUrl) {
    if (page > -1 && !inCallback) {
        inCallback = true;
        page++;
        $("div#loading").show();
        $.ajax({
            type: 'GET',
            url: ajaxCallUrl,
            data: "pageNumber=" + page,
            success: function (data, textstatus) {
                debugger;
                if (data != '') {
                    $("table > tbody").append(data);
                    $("table > tbody > tr:even").addClass("alt-row-class");
                    $("table > tbody > tr:odd").removeClass("alt-row-class");
                }
                else {
                    page = -1;
                }
                inCallback = false;
                $("div#loading").hide();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    }
}