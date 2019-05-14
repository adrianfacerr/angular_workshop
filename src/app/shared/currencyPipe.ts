import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'currencyPipe'})
export class CurrencyPipe implements PipeTransform {
  transform(value: number): any {
    if(value > 1000){
    return '$'; }
    else return value + "EUROI"
  }
}
