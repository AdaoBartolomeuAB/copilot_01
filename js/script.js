$(document).ready(function () {
    $.getJSON('contribuintes_angola_com_nif.json', function (data) {
        let tableBody = '';
        $.each(data, function (index, contribuinte) {
            tableBody += `
                <tr>
                    <td>${contribuinte.nome}</td>
                    <td>${contribuinte.endereco}</td>
                    <td>${contribuinte.renda_usd}</td>
                    <td>${contribuinte.renda_aoa}</td>
                    <td>${contribuinte.cidade}</td>
                    <td>${contribuinte.provincia}</td>
                    <td>${contribuinte.nif}</td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="showDetails(${index})">Ver mais</button>
                    </td>
                </tr>
            `;
        });
        $('#contribuintes-table-body').html(tableBody);
    });
});

function showDetails(index) {
    $.getJSON('contribuintes_angola_com_nif.json', function (data) {
        const contribuinte = data[index];
        $('#modal-nome').text(contribuinte.nome);
        $('#modal-endereco').text(contribuinte.endereco);
        $('#modal-renda-usd').text(contribuinte.renda_usd);
        $('#modal-renda-aoa').text(contribuinte.renda_aoa);
        $('#modal-cidade').text(contribuinte.cidade);
        $('#modal-provincia').text(contribuinte.provincia);
        $('#modal-nif').text(contribuinte.nif);
        $('#contribuinteModal').modal('show');
    });
}