import java.io.*;
import java.util.*;

public class MergeStrings {
    static String MergeStrings(String[] strings) {
        // convert original string array to a char array
        String temp = "";
        for (String s : strings) temp += s;
        char[] charArray = temp.toCharArray();
        
        // convert the chars to a corresponding int array
        int[] ascii = new int[charArray.length];
        for (int i = 0; i < charArray.length; i++) {
            ascii[i] = (int)charArray[i];
        }

        // sort 'ascii' to achieve "alphabetical" order
        Arrays.sort(ascii);

        // overwrite charArray with the sorted ASCII values
        for (int i = 0; i < charArray.length; i++) {
            charArray[i] = (char)ascii[i];
        }

        // build the result string from the modified charArray
        temp = "";
        for (char c : charArray) temp += c;

        return temp;
    }
}