import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  current: number=undefined;
  listAccordion:any=[];
  toggleTheme:boolean=true;
  constructor(public navCtrl: NavController) {
    this.listAccordion = [
      {icon:'assets/icon/breads.svg', title: 'Breads and Pastries', panelText: 'Bread is one of the oldest prepared foods. Evidence from 30,000 years ago in Europe revealed starch residue on rocks used for pounding plants. It is possible that during this time,starch extract from the roots of plants,such as cattails and ferns,was spread on a flat rock,placed over a fire and cooked into a primitive form of flatbread.The worlds oldest evidence of bread-making has been found in a 14,500 year old Natufian site in Jordans northeastern desert. Around 10,000 BC,with the dawn of the Neolithic age and the spread of agriculture,grains became the mainstay of making bread.Yeast spores are ubiquitous,including on the surface of cereal grains,so any dough left to rest leavens naturally.'},
      {icon:'assets/icon/fish.svg', title: 'Fish', panelText: 'Fish are gill-bearing aquatic craniate animals that lack limbs with digits. They form a sister group to the tunicates,together forming the olfactores. Included in this definition are the living hagfish,lampreys,and cartilaginous and bony fish as well as various extinct related groups.'},
      {icon:'assets/icon/meat.svg', title: 'Meat', panelText: 'Paleontological evidence suggests that meat constituted a substantial proportion of the diet of even the earliest humans. Early hunter-gatherers depended on the organized hunting of large animals such as bison and deer. The domestication of animals,of which we have evidence dating back to the end of the last glacial period (c. 10,0 BCE),allowed the systematic production of meat and the breeding of animals with a view to improving meat production. The animals which are now the principal sources of meat were domesticated in conjunction with the development of early civilizations'},
      {icon:'assets/icon/fruits.svg', title: 'Fruits', panelText: 'In botany,a fruit is the seed-bearing structure in flowering plants(also known as angiosperms)formed from the ovary after flowering.Fruits are the means by which angiosperms disseminate seeds.Edible fruits,in particular,have propagated with the movements of humans and animals in a symbiotic relationship as a means for seed dispersal and nutrition;in fact,humans and many animals have become dependent on fruits as a source of food.Accordingly,fruits account for a substantial fraction of the worlds agricultural output,and have acquired extensive cultural and symbolic meanings.In common language usage,"fruit" normally means the fleshy seed-associated structures of a plant that are sweet or sour,and edible in the raw state,such as apples,bananas,grapes,lemons,oranges,and strawberries.On the other hand,in botanical usage, fruit includes many structures that are not commonly called fruits, such as bean pods,corn kernels,tomatoes,and wheat grains.The section of a fungus that produces spores is also called a fruiting body.'},
      {icon:'assets/icon/salad.svg', title: 'Vegetable', panelText: 'Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter,including the flowers,fruits,stems,leaves,roots,and seeds.'}
    ]
  }

  open(event,index){
    this.current = this.current != index ? index : undefined ;
    let panel = event.target.nextElementSibling;
    if(panel['style'].maxHeight){
      panel['style'].maxHeight = null
    }else{
      let panels = document.getElementsByClassName('panel');
      for (let p = 0; p < panels.length; p++) {
        const pE = panels[p];
        pE['style'].maxHeight = null
      }
      panel['style'].maxHeight = panel.scrollHeight + 'px';
    }
  }
}
