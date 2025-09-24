import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  images = [
    {
      src: 'assets/images/products/Samsung Logo.jpg',
      title: 'Samsung',
      description:
        'Marca surcoreana con más de 50 años de trayectoria. Sus equipos de climatización integran tecnología Digital Inverter, operación silenciosa y conectividad inteligente, destacándose por eficiencia y diseño moderno.',
    },
    {
      src: 'assets/images/products/LG Logo.jpg',
      title: 'LG',
      description:
        'LG, de Corea del Sur, cuenta con más de 60 años en climatización. Sus equipos con tecnología Dual Inverter optimizan rendimiento y reducen consumo. Se valoran por diseño moderno, funcionamiento silencioso y alta eficiencia.',
    },
    {
      src: 'assets/images/products/Daikin Logo.jpg',
      title: 'Daikin',
      description:
        'Daikin es una marca japonesa con más de 90 años de experiencia. Reconocida por innovar con sistemas como VRV/VRF, ofrece soluciones de alta eficiencia, regulación precisa y gran adaptabilidad técnica.',
    },
    {
      src: 'assets/images/products/York Logo.jpg',
      title: 'York',
      description:
        'Marca estadounidense con más de 140 años en sistemas de climatización. A lo largo de su historia incorporó diversas innovaciones, desarrollando soluciones versátiles centradas en eficiencia técnica y operativa.',
    },
    {
      src: 'assets/images/products/Giacomini Logo.png',
      title: 'Giacomini',
      description:
        'Giacomini, es una empresa italiana con más de 60 años en el mercado, especializándose en la fabricación de caños y accesorios para calefacción, destacando por su precisión, eficiencia y durabilidad.',
    },
    {
      src: 'assets/images/products/Rehau Logo.png',
      title: 'Rehau',
      description:
        'Rehau, de origen alemán y con más de 70 años en el mercado, es líder en productos de climatización y fontanería. Sus productos son conocidos por ofrecer altos estándares de calidad y sostenibilidad.',
    },
    {
      src: 'assets/images/products/AristonLogo.png',
      title: 'Ariston',
      description:
        'Ariston, es una marca italiana con más de 90 años de experiencia en el mercado global, ofrece productos innovadores y eficientes para calefacción y agua caliente, destacando por su calidad duradera, sostenibilidad y facilidad de uso.',
    },
    {
      src: 'assets/images/products/Peisa Logo.png',
      title: 'Peisa',
      description:
        'Peisa, con más de 40 años de trayectoria en Argentina, es conocida por sus productos de climatización que combinan diseño avanzado y rendimiento fiable.',
    },
    {
      src: 'assets/images/products/Baxi Logo.png',
      title: 'Baxi',
      description:
        'Baxi, con más de 150 años de historia, proporciona productos de calefacción y agua caliente conocidos por su fiabilidad y durabilidad. La marca combina una larga tradición con tecnologías modernas para asegurar el confort y el ahorro energético. ',
    },
  ];
}
