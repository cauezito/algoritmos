package main;
import java.util.Arrays;

/**
 *
 * @author Cauê Santos
 * O primeiro elemento selecionado é o segundo, se ele for menor que o elemento anterior
 * deve ser trocado por ele.
 * Repetir o processo "empurrando" o menor elemento para o início do vetor.
 */
public class InsertionSort {
    public static void main(String[] args) {
        int vetor[] = {20,10,12};        
        int atual, j;
        for(int i=1; i<vetor.length; i++){
            atual = vetor[i]; // 10 
            j = i - 1; // 0
            while((j >= 0 && vetor[j] > atual)){ //20 > 10? true
                vetor[j + 1] = vetor[j]; // {20, 20, 12}
                j = j - 1; 
            }
            vetor[j+1] = atual;            
        }
        
        System.out.println(Arrays.toString(vetor));
        
    }
}
