//#include <stdio.h>
//#include <iostream>
//#include <stdlib.h>
//#include <time.h>
//#define Max_level 9
//#define  N 500
//#define p 0.8
//
//using namespace std;
//int levelOfNode(int k) {
//
//    int level = 1;
//    srand(time(NULL));
//    while (((rand() % (999 + 1) / (float) (999 + 1)) <(float) p) && level < Max_level){
//        //保留了三位有效数字
//        level ++;
//        //p的概率向上长一层
//
//    }
//    return level;
//}
//
//
//class SkipList{
//
//public:
//    struct node{
//        int key;
//        node * up;
//        node * down;
//        node * left;
//        node * right;
//        node (int k = 0): key(k), up(nullptr), down(nullptr), left(nullptr), right(nullptr) {};
//
//    };
//    node * upper[N]  ;
//    node * newnode[N];
//    node * hea[Max_level];
//    node * tai[Max_level];
//    int he = 0;
//    int ta = 0;
//    int k = 0;
//    int cnt = 0;
//    node * head;
//    node * tail;
//    int levelNum;
//    SkipList(){
//        levelNum = 1;
//        head = new node(0);
//        //head没有元素记为元素为0
//        tail = new node(0);
//        head->right = tail;
//        tail->left = head;
//    }
//
//    int find(int x) const{
//        int steplong = 0;
//        node * pos1 = head;
//        pos1 = head;
//        while (pos1->right->key != 0 ){
//            steplong += 1;
//            if(x == pos1->key){
//                return  steplong;
//            }
//            if(x > pos1->key){
//                if(x == pos1->right->key)
//                    return steplong;
//                if(x> pos1->right->key && pos1->right->key != 0){
//                    pos1 = pos1->right;
//                    continue;
//                }
//                if(head->down != nullptr){
//                    pos1 = pos1->down;
//                    steplong += 1;
//
//                }else return 0;
//            }
//        }
//        if(pos1->right->key == 0){
//            steplong += 1;
//            if(x == pos1->key)
//                return  steplong;
//            else return 0;
//        }
//    }
//    bool insert(int x){
//        int hight = levelOfNode(x);
//        if(find(x) != 0){
//            return false;
//        }
//        //能插入
//        node * pos = head;
//        //node * pre;
//
//        while(1) {
//            //pre = pos;
//            //右寻
//            while (x > pos->right->key && pos->right->key != 0) {
//                    //pre = pos;
//                    pos = pos->right;
//                }
//            //下寻
//            if (pos->down != nullptr) {
//                pos = pos->down;
//                continue;
//            }
//            break;
//        }
//        //创建节点newnode
//        newnode[cnt] = new node(x);
//        //插入进来
//        newnode[cnt]->right = pos->right;
//        newnode[cnt]->left = pos;
//        pos->right =newnode[cnt];
//        newnode[cnt]->right->left = newnode[cnt];
//
//        int h = hight;
//        int l =levelNum;
//        if(h > l){
//            levelNum = h;
//        }else
//            levelNum = levelNum;
//
//        //cnt ++;
//        while (h != 1 && l != 1) {
//
//            //s上下连接upper和newnode
//            upper[k] = new node(x);
//            upper[k]->down = newnode[cnt];
//            newnode[cnt]->up = upper[k];
//            node * tmp = newnode[cnt];
//           // traverse();
//            //一定找得到zuoyou的情况
//            while (tmp->left->up == nullptr) {
//                        tmp = tmp->left;
//            }
//            upper[k]->right = tmp->left->up->right;
//            upper[k]->left = tmp->left->up;
//            tmp->left->up->right = upper[k];
//            upper[k]->right->left = upper[k];
//            //cnt ++;
//            newnode[cnt+1] = upper[k] ;
//            h--;
//            l--;
//            k ++;
//            cnt ++;
//            //traverse();
//            }
//        //高出来了
//            while(h != 1 && h>0){
//                upper[k] = new node(x);
//                newnode[cnt]->up = upper[k];
//                upper[k]->down = newnode[cnt];
//                //建立新的head tail
//                hea[he] =new node(0);
//                hea[he]->down = head;
//                head->up = hea[he];
//                tai[ta] =new node(0);
//                tai[ta]->down = tail;
//                tail->up = tai[ta];
//            //连接新层
//                upper[k]->right = tai[ta];
//                upper[k]->left = hea[he];
//                hea[he]->right = upper[k];
//                tai[ta]->left = upper[k];
//
//                head = hea[he];
//                tail = tai[ta];
//                newnode[cnt+1] = upper[k];
//                h--;
//                k ++ ;
//                cnt ++;
//                he ++;
//                ta ++;
//                //traverse();
//            }
//        return true;
//
//    }
//
//// (rand() % (999 + 1)
//    void traverse(){
//        node* cursor = head;
//        while(cursor != nullptr) {
//            node* cur = cursor;
//            while(cur != nullptr) {
//                cout << cur->key << " ";
//                cur = cur->right;
//            }
//            cursor = cursor->down;
//            printf("\n");
//        }
//        return;
//    }
//};
//int main(){
//    SkipList sl =SkipList();
//    //cout<< sl.head->right->key<<endl;
//
//
//    sl.insert(1);
//    sl.insert(2);
//    //sl.traverse();
//    sl.insert(3);
//    sl.insert(5);
//    sl.insert(6);
//    sl.insert(7);
//  sl.insert(1);
//    sl.insert(9);
//    sl.insert(5);
//    sl.insert(16);
//    sl.insert(6);
//
//    sl.insert(2);
//    sl.insert(7);
//    sl.insert(76);
//    sl.insert(58);
//    sl.insert(65);
//
// //   cout<<sl.find(5)<<endl;
//    cout<<sl.levelNum<<endl;
//    sl.traverse();
//
//
//};

#include <iostream>
#include <stdlib.h>
#include <time.h>
#define N 50
#define Max_level 16
#define p 0.125
using namespace std;
class SkipList {
public:
    struct node {
        int key;
        node* up;
        node* down;
        node* left;
        node* right;
        node (int k): key(k), up(nullptr), down(nullptr), left(nullptr), right(nullptr) {};
    };
    node* head;
    node* tail;
    int levelNum;
    int cnt;
    node* search(const int& val,int &cnt) {
        cnt = 0;
        node *pos = head;
        while (pos->right != nullptr && pos->down != nullptr) {
            //头节点列时
            if (pos->left == nullptr) {
                pos = pos->right;
                cnt++;
            }
            while (pos->right != nullptr && val >= pos->key){
                pos = pos->right;
                cnt ++;
            }
            cnt++;
            //过了一步，回来
            pos = pos->left;
            //下寻
            pos = pos->down;
            cnt ++ ;
        }
        //底层
        if (pos->left == nullptr)
            pos = pos->right;
        while (pos->right != nullptr && val >= pos->key) {
            pos = pos->right;
            cnt ++;
        }
        cnt ++;
        //fanhui left node
        return pos->left;
    }
public:
    SkipList(){
        levelNum = 1;
        head = new node(0);
        tail = new node(0);
        head->right = tail;
        tail->left = head;
    }
    int height() const{
        return levelNum;
    }
    bool insert(int val) {
        node* pos = search(val,cnt);
        if (pos->left != nullptr && pos-> key == val)
            return false;
        node* newnode = new node(val);
        //连接
        newnode->left = pos;
        newnode->right = pos->right;
        newnode->left->right = newnode;
        newnode->right->left = newnode;

        float ran = rand() % (999 + 1) / (float) (999 + 1);
        while (ran < p  && levelNum < Max_level) {
            while (pos->left != nullptr && pos->up == nullptr)
                pos = pos->left;
            if (pos->up == nullptr ) {
                node* new_head = head->up = new node(0);
                node* new_tail = tail->up = new node(0);
                new_head->down = head, head->up = new_head;
                new_tail->down = tail, tail->up = new_tail;
                tail = new_head->right = new_tail;
                head = new_tail->left = new_head;
                levelNum++;
            }
            pos = pos->up;
            node * _newnode = new node(val);
            _newnode->left = pos, _newnode->right = pos->right;
            _newnode->left->right = _newnode, _newnode->right->left = _newnode;

            _newnode->down = newnode, newnode->up = _newnode;
            newnode = _newnode, newnode = _newnode;
            ran = rand() % (999 + 1) / (float) (999 + 1);
        }
        return true;
    };

    void traverse() {
        node *pos = head;
        while (pos != nullptr) {
            node *pos2 = pos;
            while (pos2 != nullptr) {
                cout << pos2->key << " ";
                pos2 = pos2->right;
            }
            pos = pos->down;
            cout << endl;
        }
    }
};

int main() {
    SkipList sl;
    srand(time(0));
    int averlong = 0;
    for(int i = 1;i <= N;i++){
    sl.insert(i);
    }
    //L.search(35,L.cnt);
    //cout<< L.cnt<<endl;
    srand(time(NULL));
    for(int i = 1;i <= 20000;i++){

        sl.search((rand() % N) + 1,sl.cnt);
        averlong += sl.cnt;
    }

    averlong /= 20000;
    cout<<"插入 "<<N<<" 个元素，跳表查找次数平均值为"<<averlong<<endl;
    cout<<"跳表高度为"<<sl.height()<<endl;
    sl.traverse();

    return 0;
}