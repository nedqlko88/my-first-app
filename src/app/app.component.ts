import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!!'}];
  value = 2;

  onServerAdded(serverData: {serverName: string, serverContent: string}): void {
    this.serverElements.push({
      type:  'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}): void {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(): void {
    this.serverElements[0].name = 'Changed';
  }

  onDestroy(): void {
    this.serverElements.splice(0, 1);
  }
}
