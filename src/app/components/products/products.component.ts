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
      src: 'assets/images/products/AristonLogo.png',
      title: 'Ariston',
      description: 'Ariston, es una marca italiana con más de 90 años de experiencia en el mercado global, ofrece productos innovadores y eficientes para calefacción y agua caliente, destacando por su calidad duradera, sostenibilidad y facilidad de uso.',
    },
    {
      src: 'assets/images/products/Baxi Logo.png',
      title: 'Baxi',
      description: 'Baxi, con más de 150 años de historia, proporciona productos de calefacción y agua caliente conocidos por su fiabilidad y durabilidad. La marca combina una larga tradición con tecnologías modernas para asegurar el confort y el ahorro energético. ',
    },
    {
      src: 'assets/images/products/Ferroli Logo.png',
      title: 'Ferroli',
      description: 'Ferroli, con más de 65 años en Italia, se especializa en productos para calefacción, los cuales son valorados por su robustez y capacidad para proporcionar un rendimiento constante, adaptándose a las necesidades de los usuarios. ',
    },
    {
      src: 'assets/images/products/Giacomini Logo.png',
      title: 'Giacomini',
      description: 'Giacomini, es una empresa italiana con más de 60 años en el mercado, especializándose en la fabricación de caños y accesorios para calefacción, destacando por su precisión, eficiencia y durabilidad.',
    },
    {
      src: 'assets/images/products/Peisa Logo.png',
      title: 'Peisa',
      description: 'Peisa, con más de 40 años de trayectoria en Argentina, es conocida por sus productos de climatización que combinan diseño avanzado y rendimiento fiable.',
    },
    {
      src: 'assets/images/products/Rehau Logo.png',
      title: 'Rehau',
      description: 'Rehau, de origen alemán y con más de 70 años en el mercado, es líder en productos de climatización y fontanería. Sus productos son conocidos por ofrecer altos estándares de calidad y sostenibilidad.',
    },
  ];
}
