export interface CollectionI {
    id: number // id of collection
    name: string // collection name
    price: number // ? collection price or average price of inlcuded arts
    marketCap: number // ? Market cap
    arts: ArtI[] // Included arts list
}

export interface ArtI {
    id:number // id of art
    src: string // src of image
    name: string // name of nft
    price: number // price of nft, unit = ether
    collectionRef: number // Collection ID reference Index of Collection List
}