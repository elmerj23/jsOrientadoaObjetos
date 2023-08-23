class Coments{
constructor({
nameComent,
content,
roleComent='cliente',
}){
this.nameComent=nameComent;
this.content=content;
this.roleComent=roleComent;
this.like=0;
}
publicar(){
console.log(this.nameComent+'('+this.roleComent + ')');
console.log(this.like+'like');
console.log(this.content);
}
};
class Description{
constructor({
content,
}){
this.content=content;}
}
const descriptionTankMini=new Description({
content:"este es uno de los tanques mas pequeños ,ideales para realizar un riego en campos pequeños o utilizar reservorio de combustibles",
})
const descriptionTankMedium=new Description({
content:"Este es uno de nuestros Grandes Logros,el tanque mediano es unos de los mas utilizados en el mercado ,ya que cuenta con un reservorio ideal para el tambo,el campo,las municipalidaes etc..."
,})
const descriptionPools=new Description({
content:"Las mejores piletas las podes encontar en nuestra fabrica,fmateriales de la mas alta calidad,trabajos realizados totalmente a mano ",
})
class Tank{
constructor({
name,
height,
width,
long,
description,
}){
this.name=name;
this.height=height;
this.width=width;
this.long=long;
this.description=description;
}
}
class TankPools extends Tank{
constructor(props){
super(props);
}
}

const tanqueMini=new TankPools({
name:'Tanque hogareño',
height:'1 mts de alto',
width:'2mts de ancho',
long:'4 mts largo',
description:descriptionTankMini,
});
const tanqueMedium=new TankPools({
name:'Tanque hogareño',
height:'2 mts de alto',
width:'3 mts de ancho',
long:'5 mts largo',
description:descriptionTankMedium,
});
const pileta=new TankPools({
name:'Pileta',
width:'2,5 mts de ancho',
long:'5 mts largo',
description:descriptionPools,})

class Customer{
constructor({
name,
age,
productSeleccion=[],
}){
this.name=name;
this.age=age;
this.productseleccion=productSeleccion;
}
publicarComent(comentContent){
const comentario=new Coments({
nameComent:this.name,
content:comentContent,
});
return comentario.publicar();
}

}
class CustomerBasic extends Customer{
constructor(props){
super(props)
}
publicarComent(comentContent){
const comentario=new Coments({
nameComent:this.name,
content:comentContent,
});
if(this.productseleccion.length==[0])
{console.warn('Lo siento debe seleccionar un producto para poder comentar ')}else{return comentario.publicar();}
}

}

class Employed extends Customer{
constructor(props){
super(props)}
publicarComent(comentContent){
const comentario=new Coments({
nameComent:this.name,
roleComent:'Empresa',
content:comentContent,
});
return comentario.publicar();
}

}




const juan=new CustomerBasic({
name:'Juan',
age:25 +' años',
productSeleccion:[tanqueMini,],

});
const sergio=new CustomerBasic({
name:'sergio',
age:32 +' años',
productSeleccion:[],




})
const employed=new Employed({
name:'Tanque Amstrong',

})
