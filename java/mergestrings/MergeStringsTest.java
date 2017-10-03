import static org.junit.Assert.assertEquals;
import org.junit.Test;

// javac -cp .;junit-4.12.jar SolutionTest.java
// java -cp .;junit-4.12.jar;hamcrest-core-1.3.jar org.junit.runner.JUnitCore SolutionTest

public class MergeStringsTest {

    @Test
    public void testOneChar() {
        String[] str = {"a"};
        assertEquals("a", MergeStrings.MergeStrings(str));
    }

    @Test
    public void testTwoStrings1() {
        String[] str = {"abc", "cde"};
        assertEquals("abccde", MergeStrings.MergeStrings(str));
    }

    @Test
    public void testTwoStrings2() {
        String[] str = {"cde", "abc"};
        assertEquals("abccde", MergeStrings.MergeStrings(str));
    }

    @Test
    public void testThreeStrings() {
        String[] str = {"def", "cde", "abc"};
        assertEquals("abccddeef", MergeStrings.MergeStrings(str));
    }

}