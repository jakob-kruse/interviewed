FROM codercom/code-server:latest

RUN sudo apt-get update
RUN sudo apt-get install -y nodejs npm

ENV NPM_CONFIG_PREFIX=/home/coder/.npm-global

ENV PATH=$PATH:/home/coder/.npm-global/bin

RUN npm install --global pnpm

RUN code-server --install-extension dbaeumer.vscode-eslint
RUN code-server --install-extension esbenp.prettier-vscode
RUN code-server --install-extension johnsoncodehk.volar

RUN git clone https://github.com/jakob-kruse/interviewed.git /home/coder/interview

RUN echo 'export PATH=$PATH:/home/coder/.npm-global/bin' >> ~/.bashrc 

ENTRYPOINT ["/usr/bin/entrypoint.sh", "--bind-addr", "0.0.0.0:8080", "--auth", "none", "/home/coder/interview"]