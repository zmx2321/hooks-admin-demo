import { createContext, useContext, useState } from 'react';
import { MyContext } from './index'

const ToolBar = () => {
    return (
        <section className="tool_bar">
            {/* Consumer可以接收所有跨组件传来的值 */}
            <MyContext.Consumer>
                {(value) => {
                    return (
                        <div>
                            使用Context方式获取的值：{JSON.stringify(value)}
                        </div>
                    );
                }}
            </MyContext.Consumer>
        </section>
    );
};

export default ToolBar;
