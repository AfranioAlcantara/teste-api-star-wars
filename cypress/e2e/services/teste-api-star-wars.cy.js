it('validação da pesquisa por Luke Skywalker',()=>{
    cy.request({
        method: "GET",
        url: "/people/1/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("Luke Skywalker")
        expect(response.body.height).to.eq("172")
        expect(response.body.mass).to.eq("77")
        expect(response.body.hair_color).to.eq("blond")
        expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/6/"
                                                                                    ])
    })

});
it('validação da pesquisa por C-3PO',()=>{
    cy.request({
        method: "GET",
        url: "/people/2/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("C-3PO")
        expect(response.body.height).to.eq("167")
        expect(response.body.mass).to.eq("75")
        expect(response.body.skin_color).to.eq("gold")
        expect(response.body.films).to.deep.equal( [
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/4/",
                                                    "https://swapi.dev/api/films/5/",
                                                    "https://swapi.dev/api/films/6/"
                                                                                    ])
    })

});
it('validação da pesquisa por R2-D2',()=>{
    cy.request({
        method: "GET",
        url: "/people/3/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("R2-D2")
        expect(response.body.height).to.eq("96")
        expect(response.body.mass).to.eq("32")
        expect(response.body.skin_color).to.eq("white, blue")
        expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/4/",
                                                    "https://swapi.dev/api/films/5/",
                                                    "https://swapi.dev/api/films/6/"
                                                                                    ])
    })

});
it('validação da pesquisa por Darth Vader',()=>{
    cy.request({
        method: "GET",
        url: "/people/4/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq("Darth Vader")
        expect(response.body.height).to.eq("202")
        expect(response.body.mass).to.eq("136")
        expect(response.body.skin_color).to.eq("white")
        expect(response.body.films).to.deep.equal([
                                                    "https://swapi.dev/api/films/1/",
                                                    "https://swapi.dev/api/films/2/",
                                                    "https://swapi.dev/api/films/3/",
                                                    "https://swapi.dev/api/films/6/"
                                                                                    ])
    })

});
it('validação da pesquisa por Leia Organa',()=>{
    cy.request({
        method: "GET",
        url: "/people/5/"
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.deep.equal({
            "name": "Leia Organa",
            "height": "150",
            "mass": "49",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "19BBY",
            "gender": "female",
            "homeworld": "https://swapi.dev/api/planets/2/",
            "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
                        ],
            "species": [],
            "vehicles": [
            "https://swapi.dev/api/vehicles/30/"
                                            ],
            "starships": [],
            "created": "2014-12-10T15:20:09.791000Z",
            "edited": "2014-12-20T21:17:50.315000Z",
            "url": "https://swapi.dev/api/people/5/"
})
    })

});