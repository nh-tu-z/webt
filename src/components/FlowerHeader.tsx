import React, { useState } from 'react';
import type { FC } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: (
        <Link to='/home'>Bộ sưu tập hoa</Link>
    ),
    key: 'mail'
  },
  {
    label: (
        <Link to='/collection'>Theo dịp</Link>
    ),
    key: 'app'
  },
  {
    label: 'Màu sắc',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: 'Hoa bó',
    key: 'flower1'
  },
  {
    label: 'Trang trí',
    key: 'flower2'
  },
  {
    label: 'Về chúng tôi',
    key: 'flower3'
  }
];

export const FlowerHeader: FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};