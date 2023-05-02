$("#slick").ddslick({
    width: "66%",
    height: "300%",
    imagePosition: "left",
    onSelected: function(data) {
        $("#Selected").html(data.selectedData.value);
    }
});

$("#slicks").ddslick({
    width: "66%",
    height: "300%",
    imagePosition: "left",
    onSelected: function(data) {
        $("#Selected").html(data.selectedData.value);
    }
});

$("#slicker").ddslick({
    width: "66%",
    height: "300%",
    imagePosition: "left",
    onSelected: function(data) {
        $("#Selected").html(data.selectedData.value);
    }
});