import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    //loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
    //loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./pages/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'gender',
    loadChildren: () => import('./pages/gender/gender.module').then( m => m.GenderPageModule)
  },
  {
    path: 'objetives',
    loadChildren: () => import('./pages/objetives/objetives.module').then( m => m.ObjetivesPageModule)
  },
  {
    path: 'personaldata',
    loadChildren: () => import('./pages/personaldata/personaldata.module').then( m => m.PersonaldataPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'firebase-register',
    loadChildren: () => import('./pages/firebase-register/firebase-register.module').then( m => m.FirebaseRegisterPageModule)
  },
  {
    path: 'farmacos',
    loadChildren: () => import('./tab3navigations/farmacos/farmacos.module').then( m => m.FarmacosPageModule)
  },
  {
    path: 'orales',
    loadChildren: () => import('./tab3navigations/farmacos/orales/orales.module').then( m => m.OralesPageModule)
  },
  {
    path: 'peptidos',
    loadChildren: () => import('./tab3navigations/farmacos/peptidos/peptidos.module').then( m => m.PeptidosPageModule)
  },
  {
    path: 'inyectables',
    loadChildren: () => import('./tab3navigations/farmacos/inyectables/inyectables.module').then( m => m.InyectablesPageModule)
  },
  {
    path: 'hormona',
    loadChildren: () => import('./tab3navigations/farmacos/hormona/hormona.module').then( m => m.HormonaPageModule)
  },
  {
    path: 'p1',
    loadChildren: () => import('./tab3navigations/farmacos/peptidos/p1/p1.module').then( m => m.P1PageModule)
  },
  {
    path: 'p2',
    loadChildren: () => import('./tab3navigations/farmacos/peptidos/p2/p2.module').then( m => m.P2PageModule)
  },
  {
    path: 'p3',
    loadChildren: () => import('./tab3navigations/farmacos/peptidos/p3/p3.module').then( m => m.P3PageModule)
  },
  {
    path: 'p4',
    loadChildren: () => import('./tab3navigations/farmacos/peptidos/p4/p4.module').then( m => m.P4PageModule)
  },
  {
    path: 'p5',
    loadChildren: () => import('./tab3navigations/farmacos/peptidos/p5/p5.module').then( m => m.P5PageModule)
  },
  {
    path: 'p6',
    loadChildren: () => import('./tab3navigations/farmacos/peptidos/p6/p6.module').then( m => m.P6PageModule)
  },
  {
    path: 'o1',
    loadChildren: () => import('./tab3navigations/farmacos/orales/o1/o1.module').then( m => m.O1PageModule)
  },
  {
    path: 'o2',
    loadChildren: () => import('./tab3navigations/farmacos/orales/o2/o2.module').then( m => m.O2PageModule)
  },
  {
    path: 'o3',
    loadChildren: () => import('./tab3navigations/farmacos/orales/o3/o3.module').then( m => m.O3PageModule)
  },
  {
    path: 'o4',
    loadChildren: () => import('./tab3navigations/farmacos/orales/o4/o4.module').then( m => m.O4PageModule)
  },
  {
    path: 'o5',
    loadChildren: () => import('./tab3navigations/farmacos/orales/o5/o5.module').then( m => m.O5PageModule)
  },
  {
    path: 'o6',
    loadChildren: () => import('./tab3navigations/farmacos/orales/o6/o6.module').then( m => m.O6PageModule)
  },
  {
    path: 'o7',
    loadChildren: () => import('./tab3navigations/farmacos/orales/o7/o7.module').then( m => m.O7PageModule)
  },
  {
    path: 'i1',
    loadChildren: () => import('./tab3navigations/farmacos/inyectables/i1/i1.module').then( m => m.I1PageModule)
  },
  {
    path: 'i2',
    loadChildren: () => import('./tab3navigations/farmacos/inyectables/i2/i2.module').then( m => m.I2PageModule)
  },
  {
    path: 'i3',
    loadChildren: () => import('./tab3navigations/farmacos/inyectables/i3/i3.module').then( m => m.I3PageModule)
  },
  {
    path: 'i4',
    loadChildren: () => import('./tab3navigations/farmacos/inyectables/i4/i4.module').then( m => m.I4PageModule)
  },
  {
    path: 'i5',
    loadChildren: () => import('./tab3navigations/farmacos/inyectables/i5/i5.module').then( m => m.I5PageModule)
  },
  {
    path: 'i6',
    loadChildren: () => import('./tab3navigations/farmacos/inyectables/i6/i6.module').then( m => m.I6PageModule)
  },
  {
    path: 'enciclopedia',
    loadChildren: () => import('./tab3navigations/enciclopedia/enciclopedia.module').then( m => m.EnciclopediaPageModule)
  },
  {
    path: 'e1',
    loadChildren: () => import('./tab3navigations/enciclopedia/e1/e1.module').then( m => m.E1PageModule)
  },
  {
    path: 'e2',
    loadChildren: () => import('./tab3navigations/enciclopedia/e2/e2.module').then( m => m.E2PageModule)
  },
  {
    path: 'e3',
    loadChildren: () => import('./tab3navigations/enciclopedia/e3/e3.module').then( m => m.E3PageModule)
  },
  {
    path: 'e4',
    loadChildren: () => import('./tab3navigations/enciclopedia/e4/e4.module').then( m => m.E4PageModule)
  },
  {
    path: 'e5',
    loadChildren: () => import('./tab3navigations/enciclopedia/e5/e5.module').then( m => m.E5PageModule)
  },
  {
    path: 'e6',
    loadChildren: () => import('./tab3navigations/enciclopedia/e6/e6.module').then( m => m.E6PageModule)
  },
  {
    path: 'e7',
    loadChildren: () => import('./tab3navigations/enciclopedia/e7/e7.module').then( m => m.E7PageModule)
  },
  {
    path: 'e8',
    loadChildren: () => import('./tab3navigations/enciclopedia/e8/e8.module').then( m => m.E8PageModule)
  },
  {
    path: 'e9',
    loadChildren: () => import('./tab3navigations/enciclopedia/e9/e9.module').then( m => m.E9PageModule)
  },
  {
    path: 'e10',
    loadChildren: () => import('./tab3navigations/enciclopedia/e10/e10.module').then( m => m.E10PageModule)
  },
  {
    path: 'suple',
    loadChildren: () => import('./tab3navigations/suple/suple.module').then( m => m.SuplePageModule)
  },
  {
    path: 'creatina',
    loadChildren: () => import('./tab3navigations/suple/creatina/creatina.module').then( m => m.CreatinaPageModule)
  },
  {
    path: 'pppeso',
    loadChildren: () => import('./tab3navigations/suple/pppeso/pppeso.module').then( m => m.PppesoPageModule)
  },
  {
    path: 'carnitina',
    loadChildren: () => import('./tab3navigations/suple/carnitina/carnitina.module').then( m => m.CarnitinaPageModule)
  },
  {
    path: 'proteina',
    loadChildren: () => import('./tab3navigations/suple/proteina/proteina.module').then( m => m.ProteinaPageModule)
  },
  {
    path: 'aminoacidos',
    loadChildren: () => import('./tab3navigations/suple/aminoacidos/aminoacidos.module').then( m => m.AminoacidosPageModule)
  },
  {
    path: 'vitaminas',
    loadChildren: () => import('./tab3navigations/suple/vitaminas/vitaminas.module').then( m => m.VitaminasPageModule)
  },
  {
    path: 'preentreno',
    loadChildren: () => import('./tab3navigations/suple/preentreno/preentreno.module').then( m => m.PreentrenoPageModule)
  },
  {
    path: 'alimentos',
    loadChildren: () => import('./tab3navigations/alimentos/alimentos.module').then( m => m.AlimentosPageModule)
  },
  {
    path: 'carnes',
    loadChildren: () => import('./tab3navigations/alimentos/carnes/carnes.module').then( m => m.CarnesPageModule)
  },
  {
    path: 'pescados',
    loadChildren: () => import('./tab3navigations/alimentos/pescados/pescados.module').then( m => m.PescadosPageModule)
  },
  {
    path: 'lacteos',
    loadChildren: () => import('./tab3navigations/alimentos/lacteos/lacteos.module').then( m => m.LacteosPageModule)
  },
  {
    path: 'verduras',
    loadChildren: () => import('./tab3navigations/alimentos/verduras/verduras.module').then( m => m.VerdurasPageModule)
  },
  {
    path: 'frutas',
    loadChildren: () => import('./tab3navigations/alimentos/frutas/frutas.module').then( m => m.FrutasPageModule)
  },
  {
    path: 'cereales',
    loadChildren: () => import('./tab3navigations/alimentos/cereales/cereales.module').then( m => m.CerealesPageModule)
  },
  {
    path: 'la1',
    loadChildren: () => import('./tab3navigations/alimentos/lacteos/la1/la1.module').then( m => m.La1PageModule)
  },
  {
    path: 'la2',
    loadChildren: () => import('./tab3navigations/alimentos/lacteos/la2/la2.module').then( m => m.La2PageModule)
  },
  {
    path: 'la3',
    loadChildren: () => import('./tab3navigations/alimentos/lacteos/la3/la3.module').then( m => m.La3PageModule)
  },
  {
    path: 'la4',
    loadChildren: () => import('./tab3navigations/alimentos/lacteos/la4/la4.module').then( m => m.La4PageModule)
  },
  {
    path: 'ca1',
    loadChildren: () => import('./tab3navigations/alimentos/carnes/ca1/ca1.module').then( m => m.Ca1PageModule)
  },
  {
    path: 'ca2',
    loadChildren: () => import('./tab3navigations/alimentos/carnes/ca2/ca2.module').then( m => m.Ca2PageModule)
  },
  {
    path: 'ca3',
    loadChildren: () => import('./tab3navigations/alimentos/carnes/ca3/ca3.module').then( m => m.Ca3PageModule)
  },
  {
    path: 'ca4',
    loadChildren: () => import('./tab3navigations/alimentos/carnes/ca4/ca4.module').then( m => m.Ca4PageModule)
  },
  {
    path: 'pe1',
    loadChildren: () => import('./tab3navigations/alimentos/pescados/pe1/pe1.module').then( m => m.Pe1PageModule)
  },
  {
    path: 'pe2',
    loadChildren: () => import('./tab3navigations/alimentos/pescados/pe2/pe2.module').then( m => m.Pe2PageModule)
  },
  {
    path: 'pe3',
    loadChildren: () => import('./tab3navigations/alimentos/pescados/pe3/pe3.module').then( m => m.Pe3PageModule)
  },
  {
    path: 've1',
    loadChildren: () => import('./tab3navigations/alimentos/verduras/ve1/ve1.module').then( m => m.Ve1PageModule)
  },
  {
    path: 've2',
    loadChildren: () => import('./tab3navigations/alimentos/verduras/ve2/ve2.module').then( m => m.Ve2PageModule)
  },
  {
    path: 've3',
    loadChildren: () => import('./tab3navigations/alimentos/verduras/ve3/ve3.module').then( m => m.Ve3PageModule)
  },
  {
    path: 'fru1',
    loadChildren: () => import('./tab3navigations/alimentos/frutas/fru1/fru1.module').then( m => m.Fru1PageModule)
  },
  {
    path: 'fru2',
    loadChildren: () => import('./tab3navigations/alimentos/frutas/fru2/fru2.module').then( m => m.Fru2PageModule)
  },
  {
    path: 'fru3',
    loadChildren: () => import('./tab3navigations/alimentos/frutas/fru3/fru3.module').then( m => m.Fru3PageModule)
  },
  {
    path: 'ce1',
    loadChildren: () => import('./tab3navigations/alimentos/cereales/ce1/ce1.module').then( m => m.Ce1PageModule)
  },
  {
    path: 'ce2',
    loadChildren: () => import('./tab3navigations/alimentos/cereales/ce2/ce2.module').then( m => m.Ce2PageModule)
  },
  {
    path: 'ce3',
    loadChildren: () => import('./tab3navigations/alimentos/cereales/ce3/ce3.module').then( m => m.Ce3PageModule)
  },
  {
    path: 'ce4',
    loadChildren: () => import('./tab3navigations/alimentos/cereales/ce4/ce4.module').then( m => m.Ce4PageModule)
  },
  {
    path: 'ejercicios',
    loadChildren: () => import('./tab3navigations/ejercicios/ejercicios.module').then( m => m.EjerciciosPageModule)
  },
  {
    path: 'pectoral',
    loadChildren: () => import('./tab3navigations/ejercicios/pectoral/pectoral.module').then( m => m.PectoralPageModule)
  },
  {
    path: 'espalda',
    loadChildren: () => import('./tab3navigations/ejercicios/espalda/espalda.module').then( m => m.EspaldaPageModule)
  },
  {
    path: 'pierna',
    loadChildren: () => import('./tab3navigations/ejercicios/pierna/pierna.module').then( m => m.PiernaPageModule)
  },
  {
    path: 'gluteo',
    loadChildren: () => import('./tab3navigations/ejercicios/gluteo/gluteo.module').then( m => m.GluteoPageModule)
  },
  {
    path: 'hombro',
    loadChildren: () => import('./tab3navigations/ejercicios/hombro/hombro.module').then( m => m.HombroPageModule)
  },
  {
    path: 'biceps',
    loadChildren: () => import('./tab3navigations/ejercicios/biceps/biceps.module').then( m => m.BicepsPageModule)
  },
  {
    path: 'triceps',
    loadChildren: () => import('./tab3navigations/ejercicios/triceps/triceps.module').then( m => m.TricepsPageModule)
  },
  {
    path: 'antebrazo',
    loadChildren: () => import('./tab3navigations/ejercicios/antebrazo/antebrazo.module').then( m => m.AntebrazoPageModule)
  },
  {
    path: 'abdomen',
    loadChildren: () => import('./tab3navigations/ejercicios/abdomen/abdomen.module').then( m => m.AbdomenPageModule)
  },
  {
    path: 'cardio',
    loadChildren: () => import('./tab3navigations/ejercicios/cardio/cardio.module').then( m => m.CardioPageModule)
  },
  {
    path: 'abd1',
    loadChildren: () => import('./tab3navigations/ejercicios/abdomen/abd1/abd1.module').then( m => m.Abd1PageModule)
  },
  {
    path: 'abd2',
    loadChildren: () => import('./tab3navigations/ejercicios/abdomen/abd2/abd2.module').then( m => m.Abd2PageModule)
  },
  {
    path: 'abd3',
    loadChildren: () => import('./tab3navigations/ejercicios/abdomen/abd3/abd3.module').then( m => m.Abd3PageModule)
  },
  {
    path: 'abd4',
    loadChildren: () => import('./tab3navigations/ejercicios/abdomen/abd4/abd4.module').then( m => m.Abd4PageModule)
  },
  {
    path: 'ant1',
    loadChildren: () => import('./tab3navigations/ejercicios/antebrazo/ant1/ant1.module').then( m => m.Ant1PageModule)
  },
  {
    path: 'ant2',
    loadChildren: () => import('./tab3navigations/ejercicios/antebrazo/ant2/ant2.module').then( m => m.Ant2PageModule)
  },
  {
    path: 'ant3',
    loadChildren: () => import('./tab3navigations/ejercicios/antebrazo/ant3/ant3.module').then( m => m.Ant3PageModule)
  },
  {
    path: 'bic1',
    loadChildren: () => import('./tab3navigations/ejercicios/biceps/bic1/bic1.module').then( m => m.Bic1PageModule)
  },
  {
    path: 'bic2',
    loadChildren: () => import('./tab3navigations/ejercicios/biceps/bic2/bic2.module').then( m => m.Bic2PageModule)
  },
  {
    path: 'bic3',
    loadChildren: () => import('./tab3navigations/ejercicios/biceps/bic3/bic3.module').then( m => m.Bic3PageModule)
  },
  {
    path: 'bic4',
    loadChildren: () => import('./tab3navigations/ejercicios/biceps/bic4/bic4.module').then( m => m.Bic4PageModule)
  },
  {
    path: 'car1',
    loadChildren: () => import('./tab3navigations/ejercicios/cardio/car1/car1.module').then( m => m.Car1PageModule)
  },
  {
    path: 'car2',
    loadChildren: () => import('./tab3navigations/ejercicios/cardio/car2/car2.module').then( m => m.Car2PageModule)
  },
  {
    path: 'car3',
    loadChildren: () => import('./tab3navigations/ejercicios/cardio/car3/car3.module').then( m => m.Car3PageModule)
    
  },
  {
    path: 'esp1',
    loadChildren: () => import('./tab3navigations/ejercicios/espalda/esp1/esp1.module').then( m => m.Esp1PageModule)
  },
  {
    path: 'esp2',
    loadChildren: () => import('./tab3navigations/ejercicios/espalda/esp2/esp2.module').then( m => m.Esp2PageModule)
  },
  {
    path: 'esp3',
    loadChildren: () => import('./tab3navigations/ejercicios/espalda/esp3/esp3.module').then( m => m.Esp3PageModule)
  },
  {
    path: 'esp4',
    loadChildren: () => import('./tab3navigations/ejercicios/espalda/esp4/esp4.module').then( m => m.Esp4PageModule)
  },
  {
    path: 'glu1',
    loadChildren: () => import('./tab3navigations/ejercicios/gluteo/glu1/glu1.module').then( m => m.Glu1PageModule)
  },
  {
    path: 'glu2',
    loadChildren: () => import('./tab3navigations/ejercicios/gluteo/glu2/glu2.module').then( m => m.Glu2PageModule)
  },
  {
    path: 'glu3',
    loadChildren: () => import('./tab3navigations/ejercicios/gluteo/glu3/glu3.module').then( m => m.Glu3PageModule)
  },
  {
    path: 'glu4',
    loadChildren: () => import('./tab3navigations/ejercicios/gluteo/glu4/glu4.module').then( m => m.Glu4PageModule)
  },
  {
    path: 'hom1',
    loadChildren: () => import('./tab3navigations/ejercicios/hombro/hom1/hom1.module').then( m => m.Hom1PageModule)
  },
  {
    path: 'hom2',
    loadChildren: () => import('./tab3navigations/ejercicios/hombro/hom2/hom2.module').then( m => m.Hom2PageModule)
  },
  {
    path: 'hom3',
    loadChildren: () => import('./tab3navigations/ejercicios/hombro/hom3/hom3.module').then( m => m.Hom3PageModule)
  },
  {
    path: 'hom4',
    loadChildren: () => import('./tab3navigations/ejercicios/hombro/hom4/hom4.module').then( m => m.Hom4PageModule)
  },
  {
    path: 'pech1',
    loadChildren: () => import('./tab3navigations/ejercicios/pectoral/pech1/pech1.module').then( m => m.Pech1PageModule)
  },
  {
    path: 'pech2',
    loadChildren: () => import('./tab3navigations/ejercicios/pectoral/pech2/pech2.module').then( m => m.Pech2PageModule)
  },
  {
    path: 'pech3',
    loadChildren: () => import('./tab3navigations/ejercicios/pectoral/pech3/pech3.module').then( m => m.Pech3PageModule)
  },
  {
    path: 'pech4',
    loadChildren: () => import('./tab3navigations/ejercicios/pectoral/pech4/pech4.module').then( m => m.Pech4PageModule)
  },
  {
    path: 'pie1',
    loadChildren: () => import('./tab3navigations/ejercicios/pierna/pie1/pie1.module').then( m => m.Pie1PageModule)
  },
  {
    path: 'pie2',
    loadChildren: () => import('./tab3navigations/ejercicios/pierna/pie2/pie2.module').then( m => m.Pie2PageModule)
  },
  {
    path: 'pie3',
    loadChildren: () => import('./tab3navigations/ejercicios/pierna/pie3/pie3.module').then( m => m.Pie3PageModule)
  },
  {
    path: 'pie4',
    loadChildren: () => import('./tab3navigations/ejercicios/pierna/pie4/pie4.module').then( m => m.Pie4PageModule)
  },
  {
    path: 'tri1',
    loadChildren: () => import('./tab3navigations/ejercicios/triceps/tri1/tri1.module').then( m => m.Tri1PageModule)
  },
  {
    path: 'tri2',
    loadChildren: () => import('./tab3navigations/ejercicios/triceps/tri2/tri2.module').then( m => m.Tri2PageModule)
  },
  {
    path: 'tri3',
    loadChildren: () => import('./tab3navigations/ejercicios/triceps/tri3/tri3.module').then( m => m.Tri3PageModule)
  },
  {
    path: 'tri4',
    loadChildren: () => import('./tab3navigations/ejercicios/triceps/tri4/tri4.module').then( m => m.Tri4PageModule)
  },
  {
    path: 'rutina1',
    loadChildren: () => import('./tab2navigations/rutina1/rutina1.module').then( m => m.Rutina1PageModule)
  },
  {
    path: 'rutina2',
    loadChildren: () => import('./tab2navigations/rutina2/rutina2.module').then( m => m.Rutina2PageModule)
  },
  {
    path: 'rutina3',
    loadChildren: () => import('./tab2navigations/rutina3/rutina3.module').then( m => m.Rutina3PageModule)
  },
  {
    path: 'rutina4',
    loadChildren: () => import('./tab2navigations/rutina4/rutina4.module').then( m => m.Rutina4PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
