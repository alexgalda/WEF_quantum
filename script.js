
document.addEventListener('DOMContentLoaded', function() {
    var viewer = new $3Dmol.createViewer("molViewer", {
        backgroundColor: "white"
    });

    // Load a PDB structure - replace 'pdbID' with the actual PDB ID
    var pdbUri = 'https://rnacomposer.cs.put.poznan.pl/Home/GetResult?resId=e4eccffd-d6c5-416c-92c2-8d0409cc69a3&name=example1.pdb'; // Example PDB ID
    $.get(pdbUri, function(data) {
        viewer.addModel(data, 'pdb');
        viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
        viewer.zoomTo();
        viewer.render();
    });
});
