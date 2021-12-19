

// Apresente no console cada um dos atributos desse JS

const  jsonDeFilmes  =  [
  {
    "title" : "Castle in the Sky" ,
    "descrição" : "A órfã Sheeta herdou um cristal misterioso que a liga ao mítico reino do céu de Laputa. Com a ajuda do engenhoso Pazu e um bando de piratas do céu, ela abre caminho até as ruínas do outrora grande civilização. Sheeta e Pazu devem enganar o mal Muska, que planeja usar a ciência de Laputa para se tornar o governante do mundo. "
  } ,
  {
    "title" : "Túmulo dos Vaga-lumes" ,
    "descrição" : "Na última parte da Segunda Guerra Mundial, um menino e sua irmã, órfãos quando sua mãe foi morta no bombardeio de Tóquio, são deixados para sobreviver por conta própria no que resta da vida civil no Japão. A trama segue este menino e sua irmã enquanto eles fazem o seu melhor para sobreviver no interior do Japão, lutando contra a fome, o preconceito e o orgulho em sua própria batalha pessoal. "
  } ,
  {
    "title" : "Meu Vizinho Totoro" ,
    "descrição" : "Duas irmãs mudam-se para o campo com o pai para ficarem mais perto da mãe hospitalizada e descobrem que as árvores circundantes são habitadas por Totoros, espíritos mágicos da floresta. Quando a mais nova foge de casa, a mais velha irmã busca ajuda dos espíritos para encontrá-la. "
  } ,
  {
    "title" : "Serviço de entrega de Kiki" ,
    "descrição" : "Uma jovem bruxa, em seu obrigatório ano de vida independente, acha difícil se encaixar em uma nova comunidade enquanto se sustenta administrando um serviço de correio aéreo."
  } ,
  {
    "título" : "Ontem" ,
    "description" : "Estamos em 1982 e Taeko tem 27 anos, é solteira e viveu toda a sua vida em Tóquio. Ela decide visitar sua família no campo e, enquanto o trem viaja noite adentro, suas memórias voltam à sua mente anos mais jovens: os primeiros momentos de romance imaturos, o início da puberdade e as frustrações da matemática e dos meninos. Na estação, ela é recebida pelo jovem fazendeiro Toshio, e os encontros com ele começam a reconectá-la a anseios esquecidos. Em mudanças líricas entre o presente e o passado, Taeko contempla o arco de sua vida e se pergunta se ela tem sido fiel aos sonhos de sua infância. "
 }
]

// COMEÇA O EXERCÍCIO
para  ( seja  i = 0 ;  i  <=  comprimento do obj . - 1 ; i ++ ) { 
//console.log(jsonDeFilmes[i])
let  filme  =  jsonDeFilmes [ i ]
console . log ( filme . título )
console . log ( filme . descrição )
}