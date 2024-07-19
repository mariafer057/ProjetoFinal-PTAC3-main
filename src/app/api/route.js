import { NextResponse } from "next/server";

export const listaDeSeries = [
    {
        id: 1,
        titulo: "My Demon",
        diretor: "Kim Jang Han",
        anoPublicacao: 2023,
        genero: "Romance",
        imagem: "https://occ-0-7515-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfKifMxxzLJt7q_b3OcVgOhuI5bHPnJyISd1MRVhZl1NeLid_TrwhdKtpseVDTC0p1nzXNfqMPw70o1tz7reLPjv3D5D3ASF1Sqd.jpg?r=51d",
        temporadas: 1
    },
    {
        id: 2,
        titulo: "Dickinson",
        diretor: "David Gordon Green",
        anoPublicacao: 2019,
        genero: "Drama",
        imagem: "https://www.apple.com/br/tv-pr/shows-and-films/d/dickinson/images/show-home-graphic-header/4x1/key-art-02/Apple_TV_Dickinson_key_art_graphic_header_4_1_show_home.jpg.large.jpg",
        temporadas: 3
    },
    {
        id: 3,
        titulo: "Tudo Bem Não Ser Normal",
        diretor: "Park Shin-woo",
        anoPublicacao: 2020,
        genero: "Romance",
        imagem: "https://occ-0-7515-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRB1WgbEN9h9RjR7bmn5tvMk391mQNVWEl-7wO2yj5X7SFm_FSY9nqJCr_Z7AfSDsrhtVOIvI9S77BTLwxX6vcbu_-BVi2SqfS6M.jpg?r=587",
        temporadas: 1
    },
    {
        id: 4,
        titulo: "The Umbrella Academy",
        diretor: "Steve Blackman",
        anoPublicacao: 2019,
        genero: "Drama",
        imagem: "https://occ-0-7515-185.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABc4Bp4lmhdqWFXsSJ2ArJhM2GocEp-O0WKOaEz3PkDu0bN9wVIE_TZeEGAnvRgWQzSDHS0w-d0hSVM5xjCBAQQFZanTCpgydC2SN.jpg?r=0ce",
        temporadas: 4
    },
    {
        id: 5,
        titulo: "Boate Kiss - A Tragédia de Santa Maria",
        diretor: "Marcelo Canellas",
        anoPublicacao: 2023,
        genero: "Documentário",
        imagem: "https://s2-globo-play.glbimg.com/gY1NgiEZ5s_FWIS5_Q1bYCD3mTc=/360x384/https://s2-globo-play.glbimg.com/XRIpf5vHLZLz-YwukoMEmFCiDsA=/1815x0:3840x2160/https://s2-globo-play.glbimg.com/Qs5_0UUZyveCTw3OYusBLWEa6L0=/https://s2.glbimg.com/WzTFES519EuR3pRoRSh_ZZcRmpc=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/P/y/RwGrIrQvWEOh2wrC0nvA/2022-3257-boate-kiss-background.jpg",
        temporadas: 1
    },
    {
        id: 6,
        titulo: "Blank",
        diretor: "Knut Næsheim",
        anoPublicacao: 2018,
        genero: "Drama",
        imagem: "https://i.mydramalist.com/x4XONj_4f.jpg",
        temporadas: 3
    },
    {
        id: 7,
        titulo: "Gap",
        diretor: "Nuttapong Wongkaveepairoj",
        anoPublicacao: 2022,
        genero: "Drama",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEBRYiQ_SUfL2yMfUdbMNBopeXV4EAf41LVRyhEDGy1zU48apyTfo5G1KvdWmMRYQjCi4yLRrO0AoClklHyycqjHEudZ4olob85bIxMDYlfZWu2A8RHTS0XKnJCh7sOKRNjepDan0HKAOaKpfHT05b9irJ4DzZUps_ESjtxWk6vrOlq62pGMJr4Tdo/s16000/GAPTheSeries_2.jpg",
        temporadas: 1
    },
    {
        id: 8,
        titulo: "Hierarchy",
        diretor: "Bae Hyeon-jin",
        anoPublicacao: 2024,
        genero: "Romance",
        imagem: "https://occ-0-7515-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXonfzKnXHxATbUF0fwTK05yDaleLJ2cNk97_Pde7DIXAF2Hi698hQ5WR7MfUPifuBaSCdBqafpEsMxr3FizhfxDEvp8RAMhaDE1.jpg?r=df0",
        temporadas: 1
    },
    {
        id: 9,
        titulo: "Stranger Things",
        diretor: "Shawn Levy",
        anoPublicacao: 2016,
        genero: "Terror",
        imagem: "https://occ-0-7515-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg?r=608&quot",
        temporadas: 4
    },
    {
        id: 10,
        titulo: "As Five",
        diretor: "Rafael Miranda",
        anoPublicacao: 2020,
        genero: "Drama",
        imagem: "https://s2-globo-play.glbimg.com/dRPSMtZCOA8_iZESUzRQIMO7OaI=/360x384/https://s2-globo-play.glbimg.com/IPSvgnqdlNER9sh-I-aAWpXh_Lc=/1815x0:3840x2160/https://s2-globo-play.glbimg.com/9JdW02dYJefM2ZthP4kZpmnXGEk=/https://s2.glbimg.com/trkD6V0Z32fXDd5RGk48WWzmFqE=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2024/3/B/wSy1aDRKaoW48sBtNOaA/2023-3726-as-five-t3-background.jpg",
        temporadas: 3
    }
];

export async function GET(){
    return NextResponse.json(listaDeSeries)
}