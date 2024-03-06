#include <iostream>
#include <vector>
#include <algorithm>
#include <ctime>
#include <chrono>
using namespace std;
#define N 10000
#define Q 15
int quickSelect(vector<int>& arr, int k) {
    int n = arr.size();
    if (k > n) {
        return -1;
    }
    srand((unsigned int) time(NULL));
    int pivot = arr[rand() % n];
    vector<int> left, right, mid;
    for (int i = 0; i < n; i++) {
        if (arr[i] < pivot) {
            left.push_back(arr[i]);
        } else if (arr[i] > pivot) {
            right.push_back(arr[i]);
        } else {
            mid.push_back(arr[i]);
        }
    }
    if (k <= left.size()) {
        return quickSelect(left, k);
    } else if (k <= left.size() + mid.size()) {
        return mid[0];
    } else {
        return quickSelect(right, k - left.size() - mid.size());
    }
}
int linearSelect(vector<int>& arr, int k) {
    int n = arr.size();
    if (k > n) {
        return -1;
    }

    if (n <= Q) {
        sort(arr.begin(), arr.end());
        return arr[k-1];
    }
    vector<vector<int>> groups;
    int q = Q;
    for (int i = 0; i < n; i += q) {
        groups.emplace_back(arr.begin() + i, arr.begin() + min(i+Q, n));
    }
    vector<int> medians;
    for (auto& group : groups) {
        sort(group.begin(), group.end());
        medians.push_back(group[group.size() / 2]);
    }
    int pivot = linearSelect(medians, medians.size() / 2);
    vector<int> left, mid, right;
    for (auto x : arr) {
        if (x < pivot) {
            left.push_back(x);
        } else if (x > pivot) {
            right.push_back(x);
        } else {
            mid.push_back(x);
        }
    }
    if (k <= left.size()) {
        return linearSelect(left, k);
    } else if (k <= left.size() + mid.size()) {
        return mid[0];
    } else {
        return linearSelect(right, k - left.size() - mid.size());
    }
}

int main() {
    vector<int> arr;
    srand((unsigned int) time(NULL));

    for(int i = 0; i<N;i++){
        arr.push_back(rand() % (10*N));
        cout<<arr[i]<<" ";
    }
    cout<<endl;

    int k = N/2;
    int time1 = 0;
    int time2 = 0;

//    int time3 = 0;
//    int time4 = 0;
    auto start1 = std::chrono::high_resolution_clock::now();
    int res1 = linearSelect(arr, k);
    auto end1 = std::chrono::high_resolution_clock::now();
    auto duration1 = std::chrono::duration_cast<std::chrono::microseconds>(end1 - start1);
    time1 += duration1.count() ;

//    auto start3 = std::chrono::high_resolution_clock::now();
//    int res3 = linearSelect(arr,k);
//    auto end3 = std::chrono::high_resolution_clock::now();
//    auto duration3 = std::chrono::duration_cast<std::chrono::microseconds>(end3 - start3);
//    time3 += duration3.count();

//    sort(arr.begin(),arr.end());
//    for(int i = 0; i<N;i++){
//        cout<<arr[i]<<" ";
//    }
//    cout<<endl;
//    auto start2 = std::chrono::high_resolution_clock::now();
//    //int res2 = linearSelect(arr,k);
//    int res2 = quickSelect(arr, k);
//    auto end2 = std::chrono::high_resolution_clock::now();
//    auto duration2 = std::chrono::duration_cast<std::chrono::microseconds>(end2 - start2);
//    time2 += duration2.count();
//
//
//
//    auto start4 = std::chrono::high_resolution_clock::now();
//    int res4 = linearSelect(arr,k);
//    auto end4 = std::chrono::high_resolution_clock::now();
//    auto duration4 = std::chrono::duration_cast<std::chrono::microseconds>(end4 - start4);
//    time4 += duration4.count();
//    cout<<"数据规模为： "<< arr.size()<<endl;
//    cout << "The " << k << "th smallest element in quickSelect is " << res1 << endl;
//    cout<<"quickSelect time: "<<time1<<endl;
//
//    cout << "The " << k << "th smallest element in linearSelect is " << res2 << endl;
//    cout<<"linearSelect time: "<<time2<<endl;
    cout<<"数据规模为： "<< arr.size()<<endl;
//    cout << "The " << k << "th smallest element in quickSelect(乱序) is " << res1 << endl;
//    cout<<"quickSelect time: "<<time1<<endl;
//
//    cout << "The " << k << "th smallest element in quickSelect(有序) is " << res2 << endl;
//    cout<<"quickSelect time: "<<time2<<endl;

    cout << "The " << k << "th smallest element in linearSelect(乱序) is " << res1 << endl;
    cout<<"|Q| = "<< Q <<endl;
    cout<<"linearSelect time: "<<time1<<endl;

//    cout << "The " << k << "th smallest element in linearSelect(有序) is " << res2 << endl;
//    cout<<"linearSelect time: "<<time4<<endl;
    return 0;
}
