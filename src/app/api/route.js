import { NextResponse } from "next/server";

export const listaDeSeries = [
    {
        id: 1,
        titulo: "My Demon",
        diretor: "Kim Jang Han",
        anoPublicacao: 2023,
        genero: "Romance",
        temporadas: 1
    },
    {
        id: 2,
        titulo: "Dickinson",
        diretor: "David Gordon Green",
        anoPublicacao: 2019,
        genero: "Drama",
        temporadas: 3
    },
    {
        id: 3,
        titulo: "Tudo Bem Não Ser Normal",
        diretor: "Park Shin-woo",
        anoPublicacao: 2020,
        genero: "Romance",
        temporadas: 1
    },
    {
        id: 4,
        titulo: "The Umbrella Academy",
        diretor: "Steve Blackman",
        anoPublicacao: 2019,
        genero: "Drama",
        temporadas: 4
    },
    {
        id: 5,
        titulo: "Boate Kiss - A Tragédia de Santa Maria",
        diretor: "Marcelo Canellas",
        anoPublicacao: 2023,
        genero: "Documentário",
        temporadas: 1
    },
    {
        id: 6,
        titulo: "Blank",
        diretor: "Knut Næsheim",
        anoPublicacao: 2018,
        genero: "Drama",
        temporadas: 3
    },
    {
        id: 7,
        titulo: "Gap",
        diretor: "Nuttapong Wongkaveepairoj",
        anoPublicacao: 2022,
        genero: "Drama",
        temporadas: 1
    },
    {
        id: 8,
        titulo: "Hierarchy",
        diretor: "Bae Hyeon-jin",
        anoPublicacao: 2024,
        genero: "Romance",
        temporadas: 1
    },
    {
        id: 9,
        titulo: "Stranger Things",
        diretor: "Shawn Levy",
        anoPublicacao: 2016,
        genero: "Terror",
        temporadas: 4
    },
    {
        id: 10,
        titulo: "As Five",
        diretor: "Rafael Miranda",
        anoPublicacao: 2020,
        genero: "Drama",
        temporadas: 3
    }
];

export async function GET(){
    return NextResponse.json(listaDeSeries)
}