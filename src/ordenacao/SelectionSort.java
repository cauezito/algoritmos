package ordenacao;

import java.util.Arrays;

/**
 *
 * @author Cauê Santos
 * Buscar o menor elemento de todos e colocá-lo em primeiro.
 * Buscar o segundo menor elemento de todos e colocá-lo em segundo.
 * ...
 */
public class SelectionSort {
    public static void main(String[] args) {
        int[] array = {3,4,8,23,58,114,1478,0,1,5,-8};
        
       int i, j, minValue, minIndex, temp=0;
       
       for(i=0; i<array.length; i++){
           minValue = array[i];
           minIndex = i;
           for(j=i; j<array.length;j++){
               if(array[j] < minValue){
                   minValue = array[j];
                   minIndex = j;
               }
           }
           if(minValue < array[i]){
               temp = array[i];
               array[i] = array[minIndex];
               array[minIndex] = temp;
           }
       }
       
       System.out.print(Arrays.toString(array));
    
    }
}
