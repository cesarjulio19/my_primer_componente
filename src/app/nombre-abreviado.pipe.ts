import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreAbreviado'
})
export class NombreAbreviadoPipe implements PipeTransform {

  transform(fullName: string): string {
    if (!fullName) return '';

    const nameParts = fullName.split(' ');

    // Asegúrate de que haya al menos dos nombres o un nombre y un apellido
    if (nameParts.length < 2) return fullName;

    const firstName = nameParts[0]; // Primer nombre completo
    const secondName = nameParts.length > 2 ? nameParts[1].charAt(0) + '.' : '';  // Primer letra del segundo nombre con punto
    const lastName = nameParts[nameParts.length - 1].charAt(0) + '.';  // Primera letra del apellido con punto

    return `${firstName} ${secondName} ${lastName}`.trim(); // Retorna el formato abreviado
  }
}
