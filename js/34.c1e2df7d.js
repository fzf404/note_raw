(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{662:function(n,a){n.exports="\x3c!--\ntitle: 04-Numpy多层神经网络\nsort:\n--\x3e\n\n```python\n# -*- coding: utf-8 -*-\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom tqdm import notebook\nimport math\nimport struct\nimport copy\n\n\ndef bypass(x):\n    return x\n# 激活函数\n\n\ndef tanh(x):\n    return np.tanh(x)\n\n\ndef softmax(x):\n    exp = np.exp(x-x.max())\n    return exp/exp.sum()\n\n# 激活函数求导\n\n\ndef d_softmax(data):\n    sm = softmax(data)\n    return np.diag(sm)-np.outer(sm, sm)\n\n\ndef d_tanh(data):\n    return 1/(np.cosh(data))**2\n\n\ndef d_bypass(x):\n    return 1\n\n\ndifferential = {softmax: d_softmax, tanh: d_tanh, bypass: d_bypass}\nd_type = {bypass: 'times', softmax: 'dot', tanh: 'times'}\n\n# 神经网络信息\ndimensions = [28*28, 100, 10]\nactivation = [bypass, tanh, softmax]\n# 层数分布\ndistribution = [\n    {},  # leave it empty!!\n    {'b': [0, 0], 'w':[-math.sqrt(6/(dimensions[0]+dimensions[1])),\n                       math.sqrt(6/(dimensions[0]+dimensions[1]))]},\n    {'b': [0, 0], 'w':[-math.sqrt(6/(dimensions[1]+dimensions[2])),\n                       math.sqrt(6/(dimensions[1]+dimensions[2]))]},\n]\n\n# 测试d_softmax\nh = 0.0001\ninput_len = 4\nfunc = softmax\n\n# 遍历求每行导数\nfor i in range(input_len):\n    # 函数求导\n    test_input = np.random.rand(input_len)\n    derivative = differential[func](test_input)\n    # 手动求导\n    value1 = func(test_input)\n    test_input[i] += h\n    value2 = func(test_input)\n    # print((value2-value1)/h)\n    # print(derivative[i])\n    print(derivative[i]-((value2-value1)/h))\n    print('over')\n\n# 测试d_tanh\n\nfunc = tanh\n\n# 遍历求每行导数\nfor i in range(input_len):\n    # 函数求导\n    test_input = np.random.rand(input_len)\n    derivative = differential[func](test_input)\n    # 手动求导\n    value1 = func(test_input)\n    test_input[i] += h\n    value2 = func(test_input)\n    # print((value2-value1)/h)\n    # print(derivative[i])\n    print(derivative[i]-((value2-value1)/h))\n    print('over')\n\n# 初始化b参数\n\n\ndef init_parameters_b(layer):\n    dist = distribution[layer]['b']\n    return np.random.rand(dimensions[layer])*(dist[1]-dist[0])+dist[0]\n# 初始化w参数\n\n\ndef init_parameters_w(layer):\n    dist = distribution[layer]['w']\n    return np.random.rand(dimensions[layer-1], dimensions[layer])*(dist[1]-dist[0])+dist[0]\n# 初始化全部\n\n\ndef init_parameters():\n    # 结果列表\n    parameter = []\n    for i in range(len(distribution)):\n        # 生成参数字典\n        layer_parameter = {}\n        for j in distribution[i].keys():\n            if j == 'b':\n                layer_parameter['b'] = init_parameters_b(i)\n                continue\n            if j == 'w':\n                layer_parameter['w'] = init_parameters_w(i)\n                continue\n        parameter.append(layer_parameter)\n    return parameter\n\n\ntrain_num = 50000\nvalid_num = 10000\ntest_num = 10000\ntrain_img_path = '/content/drive/MyDrive/NN_Model/MNIST/train-images-idx3-ubyte'\ntrain_lab_path = '/content/drive/MyDrive/NN_Model/MNIST/train-labels-idx1-ubyte'\ntest_img_path = '/content/drive/MyDrive/NN_Model/MNIST/t10k-images-idx3-ubyte'\ntest_lab_path = '/content/drive/MyDrive/NN_Model/MNIST/t10k-labels-idx1-ubyte'\n\n# 读入数据集\nwith open(train_img_path, 'rb') as f:\n    struct.unpack('>4i', f.read(16))\n    tmp_img = np.fromfile(f, dtype=np.uint8).reshape(-1, 28*28)/255\n    train_img = tmp_img[:train_num]\n    valid_img = tmp_img[train_num:]\n\nwith open(test_img_path, 'rb') as f:\n    struct.unpack('>4i', f.read(16))\n    test_img = np.fromfile(f, dtype=np.uint8).reshape(-1, 28*28)/255\n\nwith open(train_lab_path, 'rb') as f:\n    struct.unpack('>2i', f.read(8))\n    tmp_lab = np.fromfile(f, dtype=np.uint8)\n    train_lab = tmp_lab[:train_num]\n    valid_lab = tmp_lab[train_num:]\n\nwith open(test_lab_path, 'rb') as f:\n    struct.unpack('>2i', f.read(8))\n    test_lab = np.fromfile(f, dtype=np.uint8)\n\n# 展示数据集\n\n\ndef show_train(index):\n    plt.imshow(train_img[index].reshape(28, 28), cmap='gray')\n    print('lable:{}'.format(train_lab[index]))\n\n\ndef valid_train(index):\n    plt.imshow(valid_img[index].reshape(28, 28), cmap='gray')\n    print('lable:{}'.format(valid_lab[index]))\n\n\ndef show_test(index):\n    plt.imshow(test_img[index].reshape(28, 28), cmap='gray')\n    print('lable:{}'.format(test_lab[index]))\n\n\nonehot = np.identity(dimensions[-1])\n# 损失函数\n# 返回损失值\n\n\ndef sqr_loss(img, lab, paramenters):\n    # 算出预测值\n    y_pred = predict(img, paramenters)\n    y = onehot[lab]\n    diff = y-y_pred\n    # 返回10位预测值的平方\n    return np.dot(diff, diff)\n\n# 预测函数\n# 返回各个数字的概论\n\n\ndef predict(img, parameters):\n    L_in = img\n    L_out = activation[0](L_in)\n    for layer in range(1, len(dimensions)):\n        L_in = np.dot(L_out, parameters[layer]['w'])+parameters[layer]['b']\n        L_out = activation[layer](L_in)\n    return L_out\n\n# 参数梯度\n\n\ndef grad_parameters(img, lab, parameters):\n    L_in_list = [img]\n    L_out_list = [activation[0](L_in_list[0])]\n    for layer in range(1, len(dimensions)):\n        L_in = np.dot(L_out_list[layer-1],\n                      parameters[layer]['w'])+parameters[layer]['b']\n        L_out = activation[layer](L_in)\n        L_in_list.append(L_in)\n        L_out_list.append(L_out)\n\n    # 每项差[10位矩阵]\n    d_layer = -2*(onehot[lab]-L_out_list[-1])\n\n    grad_result = [None]*len(dimensions)\n    for layer in range(len(dimensions)-1, 0, -1):\n        if d_type[activation[layer]] == 'times':\n            d_layer = differential[activation[layer]](L_in_list[layer])*d_layer\n        if d_type[activation[layer]] == 'dot':\n            d_layer = np.dot(differential[activation[layer]](\n                L_in_list[layer]), d_layer)\n        # 算偏微分导数\n        grad_result[layer] = {}\n        grad_result[layer]['b'] = d_layer\n        grad_result[layer]['w'] = np.outer(L_out_list[layer-1], d_layer)\n        d_layer = np.dot(parameters[layer]['w'], d_layer)\n\n    return grad_result\n\n# predict(train_img[1],init_parameters())\n# grad_parameters(train_img[0],train_lab[0],init_parameters())\n# parameters = init_parameters()\n\n\n# 梯度偏导数测试->b\nh = 0.001\nlayer = 1\npname = 'b'\ngrad_list = []\nfor i in range(len(parameters[layer][pname])):\n    img_i = np.random.randint(train_num)\n    test_parameters = init_parameters()\n    derivative = grad_parameters(\n        train_img[img_i], train_lab[img_i], test_parameters)[layer][pname]\n    value1 = sqr_loss(train_img[img_i], train_lab[img_i], test_parameters)\n    test_parameters[layer][pname][i] += h\n    value2 = sqr_loss(train_img[img_i], train_lab[img_i], test_parameters)\n    grad_list.append(derivative[i]-(value2-value1)/h)\nnp.abs(grad_list).max()\n\n# 梯度偏导数测试->w\nh = 0.001\nlayer = 2\npname = 'w'\ngrad_list = []\nfor i in notebook.tqdm(range(len(parameters[layer][pname]))):\n    for j in range(len(parameters[layer][pname][0])):\n        img_i = np.random.randint(train_num)\n        test_parameters = init_parameters()\n        derivative = grad_parameters(\n            train_img[img_i], train_lab[img_i], test_parameters)[layer][pname]\n        value1 = sqr_loss(train_img[img_i], train_lab[img_i], test_parameters)\n        test_parameters[layer][pname][i][j] += h\n        value2 = sqr_loss(train_img[img_i], train_lab[img_i], test_parameters)\n        grad_list.append(derivative[i][j]-(value2-value1)/h)\nnp.abs(grad_list).max()\n\n# 精确度判断\n\n\ndef valid_loss(parameters):\n    loss_accu = 0\n    for img_i in range(valid_num):\n        loss_accu += sqr_loss(valid_img[img_i], valid_lab[img_i], parameters)\n    return loss_accu/(valid_num/10000)\n\n\ndef valid_accuracy(parameters):\n    correct = [predict(valid_img[img_i], parameters).argmax()\n               == valid_lab[img_i] for img_i in range(valid_num)]\n    return correct.count(True)/len(correct)\n# 精确度判断\n\n\ndef train_loss(parameters):\n    loss_accu = 0\n    for img_i in range(train_num):\n        loss_accu += sqr_loss(train_img[img_i], train_lab[img_i], parameters)\n    return loss_accu/(train_num/10000)\n\n\ndef train_accuracy(parameters):\n    correct = [predict(train_img[img_i], parameters).argmax()\n               == train_lab[img_i] for img_i in range(train_num)]\n    return correct.count(True)/len(correct)\n\n\ndef test_accuracy(parameters):\n    correct = [predict(test_img[img_i], parameters).argmax()\n               == test_lab[img_i] for img_i in range(test_num)]\n    return correct.count(True)/len(correct)\n\n\ndef grad_add(grad1, grad2):\n    for layer in range(1, len(grad1)):\n        for pname in grad1[layer].keys():\n            grad1[layer][pname] += grad2[layer][pname]\n    return grad1\n\n\ndef grad_divide(grad, denominator):\n    for layer in range(1, len(grad)):\n        for pname in grad[layer].keys():\n            grad[layer][pname] /= denominator\n    return grad\n# 更新参数\n# 传入当前参数，梯度数据，学习速率\n# 返回梯度值\n\n\ndef combine_parameters(parameters, grad, learn_rate):\n    parameters_tmp = copy.deepcopy(parameters)\n    for layer in range(len(parameters_tmp)):\n        for pname in parameters_tmp[layer].keys():\n            parameters_tmp[layer][pname] -= learn_rate*grad[layer][pname]\n    return parameters_tmp\n\n\n# 训练函数\nbatch_size = 100\n# 传入当前组索引，当前参数\n\n\ndef train_batch(current_batch, parameters):\n    # 训练第一张图\n    grad_accu = grad_parameters(\n        train_img[current_batch*batch_size+0], train_lab[current_batch*batch_size+0], parameters)\n    # 持续训练一个batch\n    for img_i in range(1, batch_size):\n        grad_tmp = grad_parameters(\n            train_img[current_batch*batch_size+img_i], train_lab[current_batch*batch_size+img_i], parameters)\n        grad_add(grad_accu, grad_tmp)\n    # 除以batch_size\n    grad_divide(grad_accu, batch_size)\n    return grad_accu\n\n\n# 初始化参数\nparameters = init_parameters()\n\ntrain_loss_list = []\nvalid_loss_list = []\ntrain_accu_list = []\nvalid_accu_list = []\n\n# 模型准确度\nvalid_accuracy(parameters)\n\nlearn_rate = 10**-9.5\nepoch_num = 10\ncurrent_epoch = 0\nfor epoch in notebook.tqdm(range(epoch_num)):\n    for i in notebook.tqdm(range(train_num//batch_size)):\n        grad_tmp = train_batch(i, parameters)\n        parameters = combine_parameters(parameters, grad_tmp, learn_rate)\n    current_epoch += 1\n    train_loss_list.append(train_loss(parameters))\n    train_accu_list.append(train_accuracy(parameters))\n    valid_loss_list.append(valid_loss(parameters))\n    valid_accu_list.append(valid_accuracy(parameters))\n\ntrain_accuracy(parameters)\n\n# 模型准确度\nvalid_accuracy(parameters)\n\ntest_accuracy(parameters)\n\nlower = 0\nplt.plot(valid_loss_list[lower:], color='red', label='validation loss')\nplt.plot(train_loss_list[lower:], color='black', label='train loss')\nplt.show()\n\nlower = 0\nplt.plot(valid_accu_list[lower:], color='red', label='validation accu')\nplt.plot(train_accu_list[lower:], color='black', label='train accu')\nplt.show()\n\nrand_batch = np.random.randint(train_num//batch_size)\ngrad_lr = train_batch(rand_batch, parameters)\n\nlr_list = []\nlower = -20\nupper = -5\nstep = 2\n# 学习速率测试\nfor lr_pow in notebook.tqdm(np.linspace(lower, upper, int((upper-lower)//step+1))):\n    learn_rate = 10**lr_pow\n    parameters_tmp = combine_parameters(parameters, grad_lr, learn_rate)\n    train_loss_tmp = train_loss(parameters_tmp)\n    lr_list.append([lr_pow, train_loss_tmp])\n\nstart = 0\nstop = -1\nplt.plot(np.array(lr_list)[start:stop, 0], np.array(\n    lr_list)[start:stop, 1], color='red')\nplt.show()\n\nr = np.random.randint(test_num)\npre = predict(test_img[r], parameters)\nwhile pre.argmax() == test_lab[r]:\n    r = np.random.randint(test_num)\n    pre = predict(test_img[r], parameters)\nprint('predict:{}'.format(pre.argmax()))\nshow_test(r)\n\nnp.save('parameters.npy', parameters)\n# parameters = np.load('complete_train.npy').item()\n\n```\n"}}]);