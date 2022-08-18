<script>
    import axios from 'axios';
    import Menu  from './menu.vue';
    export default ({
        components:{Menu},
        data(){
            return{
                imgcolumn1:[],
                imgcolumn1class:[],
                imgcolumn2:[],
                imgcolumn2class:[],
                imgcolumn3:[],
                imgcolumn3class:[],
                listimg:[]

            }
        },
        methods:{
            consultaimg(){
                if(this.listimg.length==0){
                    axios.get("https://jsonplaceholder.typicode.com/albums/1/photos").then((res)=>{
                        console.log(res)
                        if(res.data.length>0){
                            this.listimg=res.data;
                            let cont=-1;
                            for(let i=0;i<3;i++){
                                cont++;
                                this.imgcolumn1.push(this.listimg[cont].url);
                                this.imgcolumn1class.push("colum1item" + (i+1));
                            }
                            for(let i=0;i<3;i++){
                                cont++;
                                this.imgcolumn2.push(this.listimg[cont].url);
                                this.imgcolumn2class.push("colum2item" + (i+1));

                            }
                            for(let i=0;i<4;i++){
                                cont++;
                                this.imgcolumn3.push(this.listimg[cont].url);
                                this.imgcolumn3class.push("colum3item" + (i+1));
                            }
                            console.log(this.imgcolumn3class);
                        }
                    })
                }
            },
            filtro(tipo){
                if(this.listimg.length>0){
                    if(tipo=="par"){
                        let elem=0;
                        let  cont=-1;
                        this.imgcolumn1=[];
                        do{
                            cont++;
                            if(this.listimg[cont].id % 2 ==0){
                                this.imgcolumn1.push(this.listimg[cont].url);
                                elem++;
                            }
                        }while(elem<3);

                        elem=0;
                        this.imgcolumn2=[];
                        do{
                            cont++;
                            if(this.listimg[cont].id % 2 ==0){
                                this.imgcolumn2.push(this.listimg[cont].url);
                                elem++;
                            }
                        }while(elem<3);

                        elem=0;
                        this.imgcolumn3=[];
                        do{
                            cont++;
                            if(this.listimg[cont].id % 2 ==0){
                                this.imgcolumn3.push(this.listimg[cont].url);
                                elem++;
                            }
                        }while(elem<4);

                    }else{
                        let elem=0;
                        let  cont=-1;
                        this.imgcolumn1=[];
                        do{
                            cont++;
                            if(this.listimg[cont].id % 2 >0){
                                this.imgcolumn1.push(this.listimg[cont].url);
                                elem++;
                            }
                        }while(elem<3);

                        elem=0;
                        this.imgcolumn2=[];
                        do{
                            cont++;
                            if(this.listimg[cont].id % 2 >0){
                                this.imgcolumn2.push(this.listimg[cont].url);
                                elem++;
                            }
                        }while(elem<3);

                        elem=0;
                        this.imgcolumn3=[];
                        do{
                            cont++;
                            if(this.listimg[cont].id % 2 >0){
                                this.imgcolumn3.push(this.listimg[cont].url);
                                elem++;
                            }
                        }while(elem<4);

                    }
                }
            }
        }
    })
</script>

<template>
    <div>
        <nav>
            <div class="contnav">
                <div><img class="logo" src="./logo.JPG"></div>
                <Menu :lupa="true" />
            </div>
        </nav>
        <div class="baner">
            <h1>EXPLORE BEYOND HORIZON</h1>
            <p class="mensaje">Magna mundi referrentur quo, no rebum dignissim qui. <br> Per quodsi accusata id, agam labores</p>
            <div  > <p class="botonwork">VIEW OUR WORK</p></div>
        </div>
        <div class="contcentral">
            <div class="vistas">
                <i @click="consultaimg" class="bi bi-grid-fill botonwork"></i>
                <i  class="bi bi-hdd-stack-fill botonwork"></i>
            </div>
            <Menu :lupa="false" />
            <div v-if="listimg.length>0" class="vistas">
                <p @click="filtro('par')" class="opcnav">Par</p>
                <p @click="filtro('impar')" class="opcnav">Impar</p>
            </div>
            <div class="cuadricula">
                <div class="columnas">
                    <img v-for="(item, index) in imgcolumn1" :key="index" v-bind:src="item" v-bind:class="imgcolumn1class[index]">
                </div>
                <div class="columnas">
                    <img v-for="(item, index) in imgcolumn2" :key="index" v-bind:src="item" v-bind:class="imgcolumn2class[index]">
                </div>
                <div class="columnas">
                    <img v-for="(item, index) in imgcolumn3" :key="index" v-bind:src="item" v-bind:class="imgcolumn3class[index]">
                </div>
            </div>
            <div class="contcentral">
                <img style="height:150px" src="./piedepag.JPG">
            </div>
        </div>


    </div>
</template>



