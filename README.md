### 1. Các bước viết unit test
- Identify all possible case
- Specify parameters and expected results for each case
- Write test
- Execute test
- Evaluation and assessment of results
### 2. Các thành phần cơ bản có trong unit test
- Test suit
- Block test
- Test case
- Action
- Assert
### 3. Các test case để kiểm tra 1 mảng có phải là mảng số tăng dần hay không
- Mảng rỗng: [] => false
- Mảng có 1 phần tử: [1] => true
- Mảng có các phần tử tăng dần: [1, 4, 7, 9] => true
- Mảng có các phần tử giảm dần: [9, 7, 4, 1] => false
- Mảng có các phần tử sắp xếp lộn xộn: [1, 5, 2, 9] => false
- Mảng có nhiều phần tử trùng nhau: [1, 1, 1] => true
- Mảng tăng dần có 1 vài giá trị trùng lặp: [1, 2, 2, 3, 5, 6, 6] => true