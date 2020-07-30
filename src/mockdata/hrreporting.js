export default
{
    mockReport: {
        columns: [
            {
                name: "pernr",
                title: "Personalnr.",
                tooltip: "Personalnummer",
                sortable: true,
                filterable: true,
                groupable: true
            },
            {
                name: "firstName",
                title: "Vorname",
                tooltip: "Vorname",
                sortable: false,
                filterable: false,
                groupable: false
            },
            {
                name: "lastName",
                title: "Nachname",
                tooltip: "Nachname",
                sortable: false,
                filterable: false,
                groupable: false
            }
        ],

        rows: [
            {
                id: 1,
                data: [
                    {
                        columnName: "pernr",
                        value: "123456789"
                    },
                    {
                        columnName: "firstName",
                        value: "Max"
                    },
                    {
                        columnName: "lastName",
                        value: "Mustermann"
                    }
                ]
            },
            {
                id: 2,
                data: [
                    {
                        columnName: "pernr",
                        value: "245675489"
                    },
                    {
                        columnName: "firstName",
                        value: "Sabine"
                    },
                    {
                        columnName: "lastName",
                        value: "Musterfrau"
                    }
                ]
            },
        ]
    }
}