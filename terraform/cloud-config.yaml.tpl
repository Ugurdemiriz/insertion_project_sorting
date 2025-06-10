#cloud-config
write_files:
  - path: /etc/example.txt
    permissions: '0644'
    owner: root
    content: |
      This file was created via cloud-init
