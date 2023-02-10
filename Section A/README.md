## Section A: Code Review

---

Option 1: Python Task

```python
class Solution:
    def groupAnagrams(self, strs):
        result = {}
        for i in strs:
            x = "".join(sorted(i))
            if x in result:
                result[x].append(i)
            else:
                result[x] = [i]
        return list(result.values())


ob1 = Solution()
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

```

Well done on your implementation theres a few areas that need your attention but overall great submission looking forward to your next task.

### Correctness

1. You have a few indentation errors on lines 3, 4, 5, 6, 7 and 8 in your code. Please check for the following error on your console or the IDE that you are using `IndentationError: unindent does not match any outer indentation level`. The line number will be shown along with the error message. To avoid indentation errors, please consider using an IDE that detects a python file and automatically indents your code.

2. On line 5, in the code `x = "".join(sorted())`, the `sorted()` takes in a parameter, so please make sure that you pass in a parameter. If you further want to understand the error check the console or IDE.`TypeError: sorted expected 1 argument, got 0`.

### Efficiency

3. While you have a made a great effort in your use of python syntax,using a class in such a small program. You may consider using a simple method to come up with a solution to the problem.

### Style

4. Your code is neat but please consider being consistent with your indentation.

### Documentation

5. Please always make sure to document your work as this is a big part of software development, you need comments to show your technical decisions.
