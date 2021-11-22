const fakeCart = [
    {
        _id: 'fgulnbvftyuknbvcfghjk',
        user_id: 'sdfghjk765rdfghu7tfghutfb',
        productId: 'dfgerthjifijdil'
    },
    {
        _id: 'fgulnbvfugvbnmkuytfcfghjk',
        user_id: 'sdfghjk765rdfghu7tfghutfb',
        productId: 'dfgoiugbkitfghu'
    }
]

const fakeProducts = [
    { 
        _id: 'dfgerthjifijdil',
        name: 'Superb Ring',
        price: 11100,
        category: { title: 'rings' },
        description: 'Limited edition ring. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/rings/r1.png'
    },
    { 
        _id: 'dfdfghjjdil',
        name: 'Lord of Rings',
        price: 20500,
        category: { title: 'rings' },
        description: 'The best ever made Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/rings/r2.png'
    },
    { 
        _id: 'dfgoiugbkitfghu',
        name: 'Queen of Ring',
        price: 16400,
        category: { title: 'rings' },
        description: 'Limited edition ring. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/rings/r3.png'
    },
    { 
        _id: 'd45678ghjkl',
        name: 'Super Amazing',
        price: 9600,
        category: { title: 'rings' },
        description: 'Limited edition ring. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/rings/r4.png'
    },
    { 
        _id: 'dfgrtyu56789',
        name: ' The Great One',
        price: 5000,
        category: { title: 'rings' },
        description: 'Limited edition ring. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/rings/r5.png'
    },
    { 
        _id: 'dfgrthfhghe567hgti',
        name: 'King Star',
        price: 4000,
        category: { title: 'rings' },
        description: 'Limited edition ring. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/rings/r6.png'
    },
    { 
        _id: 'dfgefrtyukjghjj',
        name: 'Unkind Edition',
        price: 11500,
        category: { title: 'rings' },
        description: 'Limited edition ring. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/rings/r7.png'
    },
    { 
        _id: 'd45678ijhg',
        name: 'Unapologetic',
        price: 17700,
        category: { title: 'rings' },
        description: 'Limited edition ring. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/rings/r8.png'
    },
    { 
        _id: 'dffrkork',
        name: 'The Necklace',
        price: 1100,
        category: { title: 'necklaces' },
        description: 'Limited edition necklace. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/necklaces/n1.png'
    },
    { 
        _id: 'dfdfghkbhklj',
        name: 'Shiny Machine',
        price: 2300,
        category: { title: 'necklaces' },
        description: 'The best ever made Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/necklaces/n2.png'
    },
    { 
        _id: 'dfgoihjnbhjnj',
        name: 'The Neck Breaker',
        price: 2160,
        category: { title: 'necklaces' },
        description: 'Limited edition. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/necklaces/n3.png'
    },
    { 
        _id: 'd4hjkljk5uikhkl',
        name: 'Simply Marvellous',
        price: 12000,
        category: { title: 'necklaces' },
        description: 'Limited edition. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/necklaces/n4.png'
    },
    { 
        _id: 'dfgghjhftyukk9',
        name: 'Just For You',
        price: 5000,
        category: { title: 'necklaces' },
        description: 'Only 1 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/necklaces/n5.png'
    },
    { 
        _id: ' njnnfjjjjti',
        name: 'For Your Eyes Only',
        price: 14999,
        category: { title: 'necklaces' },
        description: 'Limited edition. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/necklaces/n6.png'
    },
    { 
        _id: 'dfgehjklkhj',
        name: 'Still The Best',
        price: 1400,
        category: { title: 'necklaces' },
        description: 'Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/necklaces/n7.png'
    },
    { 
        _id: 'hjjddjdjdkjk',
        name: 'The Best Ever',
        price: 2700,
        category: { title: 'necklaces' },
        description: 'Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/necklaces/n8.png'
    },
    { 
        _id: 'dffrktyjtujbork',
        name: 'Super Cool',
        price: 500,
        category: { title: 'bracelets' },
        description: 'Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/bracelets/b1.png'
    },
    { 
        _id: 'df5678ijhgtyujhj',
        name: 'Hand Made',
        price: 299,
        category: { title: 'bracelets' },
        description: 'The best ever made Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/bracelets/b2.png'
    },
    { 
        _id: 'dfgofghghjhghnbhjnj',
        name: 'Be Bold',
        price: 300,
        category: { title: 'bracelets' },
        description: 'Limited edition. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/bracelets/b3.png'
    },
    { 
        _id: 'd4hjkljk5ghjhjhkl',
        name: 'Embrace Change',
        price: 129,
        category: { title: 'bracelets' },
        description: 'Limited edition. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/bracelets/b4.png'
    },
    { 
        _id: 'dfggkjhjkjhukk9',
        name: 'Tailor Made For You',
        price: 500,
        category: { title: 'bracelets' },
        description: 'Only 1 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/bracelets/b5.png'
    },
    { 
        _id: 'jofejfhjklkjh9',
        name: 'Captain Fantastic',
        price: 999,
        category: { title: 'bracelets' },
        description: 'Limited edition. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/bracelets/b6.png'
    },
    { 
        _id: 'dfgebnmdfghjkhj',
        name: 'Kings Never Die',
        price: 400,
        category: { title: 'bracelets' },
        description: 'Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/bracelets/b7.png'
    },
    { 
        _id: 'hjjghjklhjklk',
        name: 'The One',
        price: 750,
        category: { title: 'bracelets' },
        description: 'Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/bracelets/b8.png'
    },
    { 
        _id: 'dffdrtyjjjjjrk',
        name: 'Midas Touch',
        price: 199,
        category: { title: 'earrings' },
        description: 'Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/earrings/e1.png'
    },
    { 
        _id: 'hjh7ghbhuflfl',
        name: 'Home Made',
        price: 370,
        category: { title: 'earrings' },
        description: 'The best ever made Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/earrings/e2.png'
    },
    { 
        _id: 'dfgofghghjhjjjhjnj',
        name: 'Notorious E',
        price: 250,
        category: { title: 'earrings' },
        description: 'Limited edition. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/earrings/e3.png'
    },
    { 
        _id: 'd4hjklmnkkkkk',
        name: 'Keeping It Simple',
        price: 229,
        category: { title: 'earrings' },
        description: 'Limited edition. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/earrings/e4.png'
    },
    { 
        _id: 'dfggkijjilkk9',
        name: 'OutLawz',
        price: 679,
        category: { title: 'earrings' },
        description: 'Only 1 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/earrings/e5.png'
    },
    { 
        _id: 'jofejjnh9',
        name: 'Kasi Style',
        price: 450,
        category: { title: 'earrings' },
        description: 'Limited edition. Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/earrings/e6.png'
    },
    { 
        _id: 'njjhhuhjkhj',
        name: 'Music To The Ear',
        price: 140,
        category: { title: 'earrings' },
        description: 'Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/earrings/e7.png'
    },
    { 
        _id: 'hjjghjjdjdkdklk',
        name: 'The Magic',
        price: 350,
        category: { title: 'earrings' },
        description: 'Only 10 made in the whole world. Made of pure diamond and titanium.',
        img: '/assets/images/products/earrings/e8.png'
    }
];

module.exports = {
    fakeProducts,
    fakeCart
}