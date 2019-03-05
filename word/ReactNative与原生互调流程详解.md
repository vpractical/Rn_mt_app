### 课题:  ReactNative与原生互调流程详解

​       内容点:ReactInstanceManager详解
​	            屏幕适配流程详解





1  js调用java （）



2   java调用js



js  调用  --- 》  C的调用----》java方法    

```
ToastExampleMoudle  extends  ReactContextBaseJavaModule  extends BaseJavaModule   extends  NativeModule
```

moudle   ----> 一系列跟当前类相关 方法



onCreate()



onStart()



onFinish()



setConentView();

```
ReactRootView extends SizeMonitoringFrameLayout  extends    FrameLayout
```

```
// 根据viewManagerName获取ViewManager的映射
    return computeConstantsForViewManager(viewManagerName);
```

虚拟Dom shadowNode



队列里面 取出来  

得到相应的ViewManager  创建原生控件

```
ReactTextViewManager.createViewInstance()
```

js调用 java方法  一定是通过 预先method缓存在 缓存中心。  然后通过反射执行





java  method 反射对象拿到了  

装饰模式

生成新的对象

```
JavaMethodWrapper
```