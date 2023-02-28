/**
 * Mock datas
 * 
 * * tab All: collections and single(which is not included in any collection)
 * * tab Collections: Collections
 * * tab Singles: Single arts
 */

import { ArtI, CollectionI } from "./interfaces";

export const arts:ArtI[] = [
    {
        id:0,
        name:'Apekun #0',
        price: 0.035,
        src: '/apekun/apekun-1.avif',
        collectionRef: 0
    },
    {
        id:1,
        name:'ControlNet Ape #4',
        price: 0.054,
        src: '/controlnet/controlnet-1.avif',
        collectionRef: 1
    },
    {
        id:2,
        name:'ControlNet Ape #2',
        price: 0.054,
        src: '/controlnet/controlnet-2.avif',
        collectionRef: 1
    },
    {
        id:3,
        name:'Apekun #1',
        price: 0.035,
        src: '/apekun/apekun-2.avif',
        collectionRef: 0
    },
    {
        id:4,
        name:'ControlNet Ape #7',
        price: 0.034,
        src: '/controlnet/controlnet-3.avif',
        collectionRef: 1
    },
    {
        id:5,
        name:'ControlNet Ape #1',
        price: 0.034,
        src: '/controlnet/controlnet-4.avif',
        collectionRef: 1
    },
    {
        id:6,
        name:'ControlNet Ape #23',
        price: 0.034,
        src: '/controlnet/controlnet-5.avif',
        collectionRef: 1
    },
    {
        id:7,
        name:'Ghost Boy #1',
        price: 0.034,
        src: '/ghostboy/ghostboy-1.avif',
        collectionRef: 2
    },
    {
        id:8,
        name:'Ghost Boy #13',
        price: 0.034,
        src: '/ghostboy/ghostboy-2.avif',
        collectionRef: 2
    },
    {
        id:9,
        name:'Ghost Boy #15',
        price: 0.034,
        src: '/ghostboy/ghostboy-3.avif',
        collectionRef: 2
    },
    {
        id:10,
        name:'Ghost Boy #35',
        price: 0.034,
        src: '/ghostboy/ghostboy-4.avif',
        collectionRef: 2
    },
    {
        id:11,
        name:'Ghost Boy #72',
        price: 0.034,
        src: '/ghostboy/ghostboy-5.avif',
        collectionRef: 2
    },
    {
        id:12,
        name:'Being as Nothing',
        price: 0.024,
        src: '/nogorup/nogroup-1.avif',
        collectionRef: -1
    },
    {
        id:13,
        name:'OG:Crystals',
        price: 0.024,
        src: '/nogorup/nogroup-2.avif',
        collectionRef: -1
    },
    {
        id:14,
        name:'Circuits',
        price: 0.024,
        src: '/nogorup/nogroup-3.avif',
        collectionRef: -1
    },
    {
        id:15,
        name:'ControlNet#512',
        price: 0.024,
        src: '/controlnet/controlnet-6.avif',
        collectionRef: 1
    },
]

export const collections: CollectionI[] = [
    {
        id:0,
        name: 'Apekun',
        price: 0.034,
        marketCap: 23,
        arts: arts.filter(art => art.collectionRef === 0)
    },
    {
        id:1,
        name: 'ControlNet',
        price: 0.035,
        marketCap: 26,
        arts: arts.filter(art => art.collectionRef === 1)
    },
    {
        id:2,
        name: 'Ghost Boy',
        price: 0.055,
        marketCap: 32,
        arts: arts.filter(art => art.collectionRef === 2)
    },
];